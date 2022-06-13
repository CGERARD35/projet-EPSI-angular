import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCartShoppingComponent } from './icon-cart-shopping.component';

describe('IconCartShoppingComponent', () => {
  let component: IconCartShoppingComponent;
  let fixture: ComponentFixture<IconCartShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCartShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCartShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
