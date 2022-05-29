import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserManagementListComponent } from './page-user-management-list.component';

describe('PageUserManagementListComponent', () => {
  let component: PageUserManagementListComponent;
  let fixture: ComponentFixture<PageUserManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserManagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
