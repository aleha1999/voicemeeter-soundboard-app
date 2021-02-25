import { Component, OnInit } from '@angular/core';
import { VmApiService } from '../vm-api.service';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})
export class SoundboardComponent implements OnInit {
  title = 'vm-frontend';
  index: string[];
  sounds: {[group: string]: string[]} = {};
  searchValue: string;
  searchResults: string[] = [];
  constructor(private vmService: VmApiService) {
    vmService.sounds().subscribe(res => {
      this.index = res;
      this.sounds = vmService.parseGroups(res);
    });
  }

  ngOnInit() {

  }

  search() {
    this.searchResults = [];
    if(!this.searchValue) return;
    this.index.forEach((v, i) => {
      if(v.toLowerCase().includes(this.searchValue.toLowerCase()))
        this.searchResults.push(v);
    });
  }
}
