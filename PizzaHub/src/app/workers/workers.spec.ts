import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workers } from './workers';

describe('Workers', () => {
  let component: Workers;
  let fixture: ComponentFixture<Workers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
