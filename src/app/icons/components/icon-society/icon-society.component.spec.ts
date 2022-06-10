import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSocietyComponent } from './icon-society.component';

describe('IconSocietyComponent', () => {
  let component: IconSocietyComponent;
  let fixture: ComponentFixture<IconSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
