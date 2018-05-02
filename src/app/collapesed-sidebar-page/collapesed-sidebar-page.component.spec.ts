import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapesedSidebarPageComponent } from './collapesed-sidebar-page.component';

describe('CollapesedSidebarPageComponent', () => {
  let component: CollapesedSidebarPageComponent;
  let fixture: ComponentFixture<CollapesedSidebarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapesedSidebarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapesedSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
