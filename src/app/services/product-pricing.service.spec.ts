import { TestBed } from '@angular/core/testing';

import { ProductPricingService } from './product-pricing.service';

describe('ProductPricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPricingService = TestBed.get(ProductPricingService);
    expect(service).toBeTruthy();
  });
});
