import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUserGearComponent } from './icon-user-gear.component';

describe('IconUserGearComponent', () => {
  let component: IconUserGearComponent;
  let fixture: ComponentFixture<IconUserGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconUserGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUserGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
