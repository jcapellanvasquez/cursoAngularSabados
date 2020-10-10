import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFormularioComponent } from './mi-formulario.component';

describe('MiFormularioComponent', () => {
  let component: MiFormularioComponent;
  let fixture: ComponentFixture<MiFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
