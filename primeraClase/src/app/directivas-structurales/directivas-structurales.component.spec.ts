import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasStructuralesComponent } from './directivas-structurales.component';

describe('DirectivasStructuralesComponent', () => {
  let component: DirectivasStructuralesComponent;
  let fixture: ComponentFixture<DirectivasStructuralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivasStructuralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasStructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
