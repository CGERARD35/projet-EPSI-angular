import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserManagementEditComponent } from './page-user-management-edit.component';

describe('PageUserManagementEditComponent', () => {
  let component: PageUserManagementEditComponent;
  let fixture: ComponentFixture<PageUserManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserManagementEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
