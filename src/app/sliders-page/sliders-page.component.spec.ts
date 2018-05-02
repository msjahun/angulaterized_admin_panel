import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersPageComponent } from './sliders-page.component';

describe('SlidersPageComponent', () => {
  let component: SlidersPageComponent;
  let fixture: ComponentFixture<SlidersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
