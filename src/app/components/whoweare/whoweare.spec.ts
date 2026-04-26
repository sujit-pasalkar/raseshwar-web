import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoweare } from './whoweare';

describe('Whoweare', () => {
  let component: Whoweare;
  let fixture: ComponentFixture<Whoweare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whoweare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whoweare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
