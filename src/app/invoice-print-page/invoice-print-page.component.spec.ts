import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePrintPageComponent } from './invoice-print-page.component';

describe('InvoicePrintPageComponent', () => {
  let component: InvoicePrintPageComponent;
  let fixture: ComponentFixture<InvoicePrintPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePrintPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePrintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
