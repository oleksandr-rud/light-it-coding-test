import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  const swaggerOptions = new DocumentBuilder()
  .setTitle('Test API')
  .setDescription('The code test API documentation.')
  .setVersion(process.env.API_VERSION || '0.0.0')
  .addBearerAuth()
  .build();
  const SwagerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  
  SwaggerModule.setup('api', app, SwagerDocument);

  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(
    new ValidationPipe({
        transform: true,
    }),
);
  
  try {
    await app.listenAsync(process.env.APP_PORT, process.env.APP_HOST);
} catch (e) {
    Logger.error(e.message);
} finally {
    Logger.debug(`Test API is started http://${process.env.HOST}:${process.env.PORT}/api`);
}
}
bootstrap();
