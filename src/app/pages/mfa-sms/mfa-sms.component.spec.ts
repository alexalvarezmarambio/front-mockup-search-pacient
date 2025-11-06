/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MfaSmsComponent } from './mfa-sms.component';

describe('MfaSmsComponent', () => {
  let component: MfaSmsComponent;
  let fixture: ComponentFixture<MfaSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
