import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseRenderComponent } from './if-else-render.component';

describe('IfElseRenderComponent', () => {
  let component: IfElseRenderComponent;
  let fixture: ComponentFixture<IfElseRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
