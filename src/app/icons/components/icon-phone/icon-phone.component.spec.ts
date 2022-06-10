import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPhoneComponent } from './icon-phone.component';

describe('IconPhoneComponent', () => {
  let component: IconPhoneComponent;
  let fixture: ComponentFixture<IconPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
