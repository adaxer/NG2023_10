import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedControlsComponent } from './shared-controls.component';

describe('SharedControlsComponent', () => {
  let component: SharedControlsComponent;
  let fixture: ComponentFixture<SharedControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedControlsComponent]
    });
    fixture = TestBed.createComponent(SharedControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
