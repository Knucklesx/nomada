import { Test, TestingModule } from '@nestjs/testing';
import { PratosController } from './pratos.controller';
import { PratosService } from './pratos.service';

describe('PratosController', () => {
  let controller: PratosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PratosController],
      providers: [PratosService],
    }).compile();

    controller = module.get<PratosController>(PratosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
