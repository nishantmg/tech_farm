import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodAddComponent } from './food-add.component';

describe('FoodAddComponent', () => {
  let component: FoodAddComponent;
  let fixture: ComponentFixture<FoodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
