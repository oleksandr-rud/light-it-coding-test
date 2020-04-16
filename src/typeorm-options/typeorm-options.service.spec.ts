import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmOptionsService } from './typeorm-options.service';

describe('TypeOrmOptionsService', () => {
  let service: TypeOrmOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOrmOptionsService],
    }).compile();

    service = module.get<TypeOrmOptionsService>(TypeOrmOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
