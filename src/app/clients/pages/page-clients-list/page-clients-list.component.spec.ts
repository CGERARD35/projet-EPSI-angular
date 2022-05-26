import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientsListComponent } from './page-clients-list.component';

describe('PageClientsListComponent', () => {
  let component: PageClientsListComponent;
  let fixture: ComponentFixture<PageClientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
