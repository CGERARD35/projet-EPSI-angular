import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditOrdersComponent } from './page-edit-orders.component';

describe('PageEditOrdersComponent', () => {
  let component: PageEditOrdersComponent;
  let fixture: ComponentFixture<PageEditOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
