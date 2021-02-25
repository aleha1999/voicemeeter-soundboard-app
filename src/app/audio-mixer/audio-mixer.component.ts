import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';

@Component({
  selector: 'app-audio-mixer',
  templateUrl: './audio-mixer.component.html',
  styleUrls: ['./audio-mixer.component.scss']
})
export class AudioMixerComponent implements OnInit {

  constructor() { }

  channels: Channel[] = [
    {
      name: "S0",
      dev: "Strip",
      index: 0,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "S1",
      dev: "Strip",
      index: 1,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "S2",
      dev: "Strip",
      index: 2,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "S3",
      dev: "Strip",
      index: 3,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "S4",
      dev: "Strip",
      index: 4,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "A1",
      dev: "Bus",
      index: 0,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "A2",
      dev: "Bus",
      index: 1,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "A3",
      dev: "Bus",
      index: 2,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "B1",
      dev: "Bus",
      index: 3,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "B2",
      dev: "Bus",
      index: 4,
      db: -60,
      canFade: true,
      muted: false
    },
    {
      name: "R",
      dev: "Recorder",
      index: 0,
      db: -60,
      canFade: false,
      muted: false
    }
  ]

  ngOnInit(): void {
  }

  fadeMode = false;
  fadeTime = 3000;

  formatS(v) {
    return (Math.round(v / 100) / 10) + 's';
  }

}
