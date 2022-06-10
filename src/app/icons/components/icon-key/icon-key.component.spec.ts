import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconKeyComponent } from './icon-key.component';

describe('IconKeyComponent', () => {
  let component: IconKeyComponent;
  let fixture: ComponentFixture<IconKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
