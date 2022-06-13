import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStatsComponent } from './icon-stats.component';

describe('IconStatsComponent', () => {
  let component: IconStatsComponent;
  let fixture: ComponentFixture<IconStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
