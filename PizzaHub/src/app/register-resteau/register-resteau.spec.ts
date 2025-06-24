import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterResteau } from './register-resteau';

describe('RegisterResteau', () => {
  let component: RegisterResteau;
  let fixture: ComponentFixture<RegisterResteau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterResteau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterResteau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
