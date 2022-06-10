import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListComponent } from './icon-list.component';

describe('IconListComponent', () => {
  let component: IconListComponent;
  let fixture: ComponentFixture<IconListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
