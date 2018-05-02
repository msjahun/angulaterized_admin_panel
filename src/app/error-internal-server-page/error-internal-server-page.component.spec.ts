import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInternalServerPageComponent } from './error-internal-server-page.component';

describe('ErrorInternalServerPageComponent', () => {
  let component: ErrorInternalServerPageComponent;
  let fixture: ComponentFixture<ErrorInternalServerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorInternalServerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInternalServerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
