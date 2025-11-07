import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPoliticsComponent } from './modal-politics.component';

describe('ModalPoliticsComponent', () => {
  let component: ModalPoliticsComponent;
  let fixture: ComponentFixture<ModalPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPoliticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
