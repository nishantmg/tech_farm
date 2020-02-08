import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalComponent } from './animal.component';

describe('AnimalComponent', () => {
  let component: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
