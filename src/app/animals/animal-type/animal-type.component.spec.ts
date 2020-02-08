import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalTypeComponent } from './animal-type.component';

describe('AnimalTypeComponent', () => {
  let component: AnimalTypeComponent;
  let fixture: ComponentFixture<AnimalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTypeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
