import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMailPageComponent } from './read-mail-page.component';

describe('ReadMailPageComponent', () => {
  let component: ReadMailPageComponent;
  let fixture: ComponentFixture<ReadMailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
