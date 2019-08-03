import { TestBed, inject } from '@angular/core/testing';

import { BrandsService } from './brands.service';

describe('BrandsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandsService]
    });
  });

  it('should be created', inject([BrandsService], (service: BrandsService) => {
    expect(service).toBeTruthy();
  }));
});
