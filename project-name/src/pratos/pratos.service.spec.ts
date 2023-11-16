import { Test, TestingModule } from '@nestjs/testing';
import { PratosService } from './pratos.service';

describe('PratosService', () => {
  let service: PratosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PratosService],
    }).compile();

    service = module.get<PratosService>(PratosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
