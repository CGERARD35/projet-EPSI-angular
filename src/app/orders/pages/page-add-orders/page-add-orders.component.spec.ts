import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrdersComponent } from './page-add-orders.component';

describe('PageAddOrdersComponent', () => {
  let component: PageAddOrdersComponent;
  let fixture: ComponentFixture<PageAddOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
