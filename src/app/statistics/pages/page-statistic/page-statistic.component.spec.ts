import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatisticComponent } from './page-statistic.component';

describe('PageStatisticComponent', () => {
  let component: PageStatisticComponent;
  let fixture: ComponentFixture<PageStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
