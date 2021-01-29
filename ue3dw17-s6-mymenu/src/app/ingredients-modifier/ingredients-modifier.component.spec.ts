import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsModifierComponent } from './ingredients-modifier.component';

describe('IngredientsModifierComponent', () => {
  let component: IngredientsModifierComponent;
  let fixture: ComponentFixture<IngredientsModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
