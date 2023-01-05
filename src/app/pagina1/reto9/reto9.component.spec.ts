import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto9Component } from './reto9.component';

describe('Reto9Component', () => {
  let component: Reto9Component;
  let fixture: ComponentFixture<Reto9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
