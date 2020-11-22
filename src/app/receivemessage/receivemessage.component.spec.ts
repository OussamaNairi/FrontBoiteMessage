import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivemessageComponent } from './receivemessage.component';

describe('ReceivemessageComponent', () => {
  let component: ReceivemessageComponent;
  let fixture: ComponentFixture<ReceivemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
