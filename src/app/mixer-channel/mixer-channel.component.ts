import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Channel } from '../channel';
import { VmApiService } from '../vm-api.service';

@Component({
  selector: 'app-mixer-channel',
  templateUrl: './mixer-channel.component.html',
  styleUrls: ['./mixer-channel.component.scss']
})
export class MixerChannelComponent implements OnInit {

  @Input()
  channel: Channel;
  @Input()
  fadeMode: boolean;
  @Input()
  fadeTime: number;
  disable = true;
  disableMute = true;
  lastUpdate = 0;
  isUpdating = false;

  constructor(private vmService: VmApiService) { }

  ngOnInit(): void {
    this.poll();
    //setInterval(this.poll.bind(this), 20000);
  }
  
  poll() {
    this.vmService.getGain(this.channel.dev, this.channel.index).subscribe(res => {
      this.channel.db = res;
      this.disable = false;
    });
    if(this.channel.canFade) {
      this.vmService.isMuted(this.channel.dev, this.channel.index).subscribe(res => {
        this.channel.muted = res;
        this.disableMute = false;
      });
    }
  }

  updateSlider(event: MatSliderChange) {
    this.channel.db = event.value;
    if(Date.now() - this.lastUpdate > 0.3 && !this.isUpdating && !this.fadeMode) {
      this.lastUpdate = Date.now();
      this.isUpdating = true;
      this.vmService.setGain(this.channel.dev, this.channel.index, this.channel.db).subscribe(() => {
        this.isUpdating = false;
      });
    }
  }

  toggleMute() {
    this.vmService.toggleMute(this.channel.dev, this.channel.index).subscribe(res => {
      this.channel.muted = res;
    });
  }

  commit() {
    setTimeout(() => {
      if(this.fadeMode && this.channel.canFade)
        this.vmService.fadeTo(this.channel.index, this.channel.db, this.fadeTime, this.channel.dev).subscribe();
      else
        this.vmService.setGain(this.channel.dev, this.channel.index, this.channel.db).subscribe();
    }, 400);
  }
}
