import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPageComponent } from './fixed-page.component';

describe('FixedPageComponent', () => {
  let component: FixedPageComponent;
  let fixture: ComponentFixture<FixedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
