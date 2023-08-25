import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20Component } from './erc20.component';

describe('Erc20Component', () => {
  let component: Erc20Component;
  let fixture: ComponentFixture<Erc20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Erc20Component]
    });
    fixture = TestBed.createComponent(Erc20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
