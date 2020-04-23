import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.setGlobalPrefix('api');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('The code test API documentation.')
    .setVersion(process.env.API_VERSION || '0.0.0')
    .addBearerAuth()
    .build();
  const SwaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, SwaggerDocument);

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
    Logger.debug(`Test API started on http://${process.env.APP_HOST}:${process.env.APP_PORT}/api`);
    Logger.debug(`Test API documentation available on http://${process.env.APP_HOST}:${process.env.APP_PORT}/docs`);
}
}
bootstrap();
