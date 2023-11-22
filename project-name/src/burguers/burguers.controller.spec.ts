import { Test, TestingModule } from '@nestjs/testing';
import { BurguersController } from './burguers.controller';
import { BurguersService } from './burguers.service';

describe('BurguersController', () => {
  let controller: BurguersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurguersController],
      providers: [BurguersService],
    }).compile();

    controller = module.get<BurguersController>(BurguersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
