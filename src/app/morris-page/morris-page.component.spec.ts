import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrisPageComponent } from './morris-page.component';

describe('MorrisPageComponent', () => {
  let component: MorrisPageComponent;
  let fixture: ComponentFixture<MorrisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
