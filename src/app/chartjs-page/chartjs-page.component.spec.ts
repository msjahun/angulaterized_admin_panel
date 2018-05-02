import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsPageComponent } from './chartjs-page.component';

describe('ChartjsPageComponent', () => {
  let component: ChartjsPageComponent;
  let fixture: ComponentFixture<ChartjsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
