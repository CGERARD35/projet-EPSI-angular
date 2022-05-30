import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditProductComponent } from './page-edit-product.component';

describe('PageEditProductComponent', () => {
  let component: PageEditProductComponent;
  let fixture: ComponentFixture<PageEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
