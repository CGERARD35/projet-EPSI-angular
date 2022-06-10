import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFolderOpenComponent } from './icon-folder-open.component';

describe('IconFolderOpenComponent', () => {
  let component: IconFolderOpenComponent;
  let fixture: ComponentFixture<IconFolderOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFolderOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFolderOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
