import { TestBed } from '@angular/core/testing';

import { FoodPricingService } from './food-pricing.service';

describe('FoodPricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodPricingService = TestBed.get(FoodPricingService);
    expect(service).toBeTruthy();
  });
});
