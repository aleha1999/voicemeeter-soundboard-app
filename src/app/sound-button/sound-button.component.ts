import { Component, Input, OnInit } from '@angular/core';
import { VmApiService } from '../vm-api.service';

@Component({
  selector: 'app-sound-button',
  templateUrl: './sound-button.component.html',
  styleUrls: ['./sound-button.component.scss']
})
export class SoundButtonComponent implements OnInit {

  @Input()
  sound: string;

  name: string;

  constructor(private vmAPI: VmApiService) { }

  ngOnInit(): void {
    this.name = this.sound.split('.')[0];
    if(this.name.includes('\\'))
      this.name = this.name.split('\\')[1];
  }

  play() {
    this.vmAPI.play(this.sound).subscribe();
  }

}
