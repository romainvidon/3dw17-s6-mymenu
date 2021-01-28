import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddLinkComponent } from './recipe-add-link.component';

describe('RecipeAddLinkComponent', () => {
  let component: RecipeAddLinkComponent;
  let fixture: ComponentFixture<RecipeAddLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAddLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
