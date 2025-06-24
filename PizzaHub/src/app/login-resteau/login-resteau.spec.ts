import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResteau } from './login-resteau';

describe('LoginResteau', () => {
  let component: LoginResteau;
  let fixture: ComponentFixture<LoginResteau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginResteau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginResteau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
