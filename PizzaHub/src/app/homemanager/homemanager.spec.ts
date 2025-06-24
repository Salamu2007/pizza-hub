import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homemanager } from './homemanager';

describe('Homemanager', () => {
  let component: Homemanager;
  let fixture: ComponentFixture<Homemanager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homemanager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homemanager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
