import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceFormPage } from './place-form.page';

describe('PlaceFormPage', () => {
  let component: PlaceFormPage;
  let fixture: ComponentFixture<PlaceFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaceFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
