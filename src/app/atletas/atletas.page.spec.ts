import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtletasPage } from './atletas.page';

describe('AtletasPage', () => {
  let component: AtletasPage;
  let fixture: ComponentFixture<AtletasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtletasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
