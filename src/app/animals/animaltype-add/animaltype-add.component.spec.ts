import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaltypeAddComponent } from './animaltype-add.component';

describe('AnimaltypeAddComponent', () => {
  let component: AnimaltypeAddComponent;
  let fixture: ComponentFixture<AnimaltypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaltypeAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaltypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
