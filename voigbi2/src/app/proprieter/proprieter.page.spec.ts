import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProprieterPage } from './proprieter.page';

describe('ProprieterPage', () => {
  let component: ProprieterPage;
  let fixture: ComponentFixture<ProprieterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProprieterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
