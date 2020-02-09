import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostEstimationComponent } from './cost-estimation.component';

describe('CostEstimationComponent', () => {
  let component: CostEstimationComponent;
  let fixture: ComponentFixture<CostEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostEstimationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
