import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlusComponent } from './icon-plus.component';

describe('IconPlusComponent', () => {
  let component: IconPlusComponent;
  let fixture: ComponentFixture<IconPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
