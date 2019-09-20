import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBibliotecaPage } from './i-biblioteca.page';

describe('IBibliotecaPage', () => {
  let component: IBibliotecaPage;
  let fixture: ComponentFixture<IBibliotecaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBibliotecaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
