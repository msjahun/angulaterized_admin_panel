import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockscreenPageComponent } from './lockscreen-page.component';

describe('LockscreenPageComponent', () => {
  let component: LockscreenPageComponent;
  let fixture: ComponentFixture<LockscreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockscreenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockscreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
