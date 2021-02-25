import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundButtonComponent } from './sound-button.component';

describe('SoundButtonComponent', () => {
  let component: SoundButtonComponent;
  let fixture: ComponentFixture<SoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
