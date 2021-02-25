import { Component } from '@angular/core';
import { VmApiService } from './vm-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appMode = 2;

  constructor(private vmService: VmApiService) {

  }

  stop() {
    this.vmService.stop().subscribe();
  }
}
