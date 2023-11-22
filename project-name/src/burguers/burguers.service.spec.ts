import { Test, TestingModule } from '@nestjs/testing';
import { BurguersService } from './burguers.service';

describe('BurguersService', () => {
  let service: BurguersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BurguersService],
    }).compile();

    service = module.get<BurguersService>(BurguersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
