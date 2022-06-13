import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUserComponent } from './icon-user.component';

describe('IconUserComponent', () => {
  let component: IconUserComponent;
  let fixture: ComponentFixture<IconUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
