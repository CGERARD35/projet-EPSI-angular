import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddProductComponent } from './page-add-product.component';

describe('PageAddProductComponent', () => {
  let component: PageAddProductComponent;
  let fixture: ComponentFixture<PageAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
