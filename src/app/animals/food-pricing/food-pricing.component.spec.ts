import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodPricingComponent } from './food-pricing.component';

describe('FoodPricingComponent', () => {
  let component: FoodPricingComponent;
  let fixture: ComponentFixture<FoodPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPricingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
