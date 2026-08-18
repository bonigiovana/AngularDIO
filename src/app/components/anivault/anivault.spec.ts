import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anivault } from './anivault';

describe('Anivault', () => {
  let component: Anivault;
  let fixture: ComponentFixture<Anivault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anivault],
    }).compileComponents();

    fixture = TestBed.createComponent(Anivault);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
