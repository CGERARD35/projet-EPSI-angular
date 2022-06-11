import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserManagementAddComponent } from './page-user-management-add.component';

describe('PageUserManagementAddComponent', () => {
  let component: PageUserManagementAddComponent;
  let fixture: ComponentFixture<PageUserManagementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserManagementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
