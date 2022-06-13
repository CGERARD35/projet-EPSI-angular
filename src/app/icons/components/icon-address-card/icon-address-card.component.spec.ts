import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddressCardComponent } from './icon-address-card.component';

describe('IconAddressCardComponent', () => {
  let component: IconAddressCardComponent;
  let fixture: ComponentFixture<IconAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAddressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
