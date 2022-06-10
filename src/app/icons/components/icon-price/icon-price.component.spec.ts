import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPriceComponent } from './icon-price.component';

describe('IconPriceComponent', () => {
  let component: IconPriceComponent;
  let fixture: ComponentFixture<IconPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
