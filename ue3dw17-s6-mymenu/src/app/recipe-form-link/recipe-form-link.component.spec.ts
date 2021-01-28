import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormLinkComponent } from './recipe-form-link.component';

describe('RecipeFormLinkComponent', () => {
  let component: RecipeFormLinkComponent;
  let fixture: ComponentFixture<RecipeFormLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
