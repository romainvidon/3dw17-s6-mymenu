import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditLinkComponent } from './recipe-edit-link.component';

describe('RecipeEditLinkComponent', () => {
  let component: RecipeEditLinkComponent;
  let fixture: ComponentFixture<RecipeEditLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeEditLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
