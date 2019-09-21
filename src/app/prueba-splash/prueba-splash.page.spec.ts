import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSplashPage } from './prueba-splash.page';

describe('PruebaSplashPage', () => {
  let component: PruebaSplashPage;
  let fixture: ComponentFixture<PruebaSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaSplashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
