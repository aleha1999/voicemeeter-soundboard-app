import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerChannelComponent } from './mixer-channel.component';

describe('MixerChannelComponent', () => {
  let component: MixerChannelComponent;
  let fixture: ComponentFixture<MixerChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixerChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
