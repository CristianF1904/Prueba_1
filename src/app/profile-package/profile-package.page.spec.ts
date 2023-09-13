import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePackagePage } from './profile-package.page';

describe('ProfilePackagePage', () => {
  let component: ProfilePackagePage;
  let fixture: ComponentFixture<ProfilePackagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
