import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalAddComponent } from './animal-add.component';

describe('AnimalAddComponent', () => {
  let component: AnimalAddComponent;
  let fixture: ComponentFixture<AnimalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
