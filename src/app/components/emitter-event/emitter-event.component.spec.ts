import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterEventComponent } from './emitter-event.component';

describe('EmitterEventComponent', () => {
  let component: EmitterEventComponent;
  let fixture: ComponentFixture<EmitterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
