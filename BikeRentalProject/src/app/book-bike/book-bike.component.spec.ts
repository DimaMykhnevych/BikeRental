import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBikeComponent } from './book-bike.component';

describe('BookBikeComponent', () => {
  let component: BookBikeComponent;
  let fixture: ComponentFixture<BookBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
