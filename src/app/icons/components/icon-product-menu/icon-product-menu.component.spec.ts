import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconProductMenuComponent } from './icon-product-menu.component';

describe('IconProductMenuComponent', () => {
  let component: IconProductMenuComponent;
  let fixture: ComponentFixture<IconProductMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconProductMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconProductMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
