import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContactComponentComponent } from './open-contact-component.component';

describe('OpenContactComponentComponent', () => {
  let component: OpenContactComponentComponent;
  let fixture: ComponentFixture<OpenContactComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenContactComponentComponent]
    });
    fixture = TestBed.createComponent(OpenContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
