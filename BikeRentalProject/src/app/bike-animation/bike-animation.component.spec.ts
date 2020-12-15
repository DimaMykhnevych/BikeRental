import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAnimationComponent } from './bike-animation.component';

describe('BikeAnimationComponent', () => {
  let component: BikeAnimationComponent;
  let fixture: ComponentFixture<BikeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
