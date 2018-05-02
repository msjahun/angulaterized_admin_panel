import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxPageComponent } from './mailbox-page.component';

describe('MailboxPageComponent', () => {
  let component: MailboxPageComponent;
  let fixture: ComponentFixture<MailboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
