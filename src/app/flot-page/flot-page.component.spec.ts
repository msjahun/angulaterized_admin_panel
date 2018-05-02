import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotPageComponent } from './flot-page.component';

describe('FlotPageComponent', () => {
  let component: FlotPageComponent;
  let fixture: ComponentFixture<FlotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
