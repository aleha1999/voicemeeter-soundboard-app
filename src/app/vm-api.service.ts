import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VmApiService {

  constructor(private http: HttpClient) { }

  sounds(): Observable<string[]> {
    return this.http.get<string[]>(environment.apiURL + "sounds");
  }

  parseGroups(val: string[]): {[group: string]: string[]} {
    let dict: {[group: string]: string[]} = {"Ungrouped": []};
    for(let i = 0; i < val.length; i++) {
      let s = val[i];
      if(s.includes("\\")) {
        let p = s.split('\\')[0];
        if(!dict[p])
          dict[p] = [];
        dict[p].push(s);
      } else {
        dict["Ungrouped"].push(s);
      }
    }
    return dict;
  }

  play(sound) {
    return this.http.get<boolean>(environment.apiURL + `play?sound=${sound}`);
  }

  mute(strip) {
    return this.http.get<boolean>(environment.apiURL + `mute/${strip}`);
  }

  unmute(strip) {
    return this.http.get<boolean>(environment.apiURL + `unmute/${strip}`);
  }

  toggleMute(device,strip) {
    return this.http.get<boolean>(environment.apiURL + `tmute/${device}/${strip}`);
  }

  isMuted(device, strip) {
    return this.http.get<boolean>(environment.apiURL + `isMuted/${device}/${strip}`);
  }

  fadeTo(index, targetDB, timeMS, device) {
    return this.http.get<boolean>(environment.apiURL + `fadeto?index=${index}&time=${timeMS}&target=${targetDB}&device=${device}`);
  }

  setGain(device, index, target) {
    return this.http.post<number>(environment.apiURL + `gain`, {device: device, index: index, target:target});
  }

  getGain(device, index) {
    return this.http.get<number>(environment.apiURL + `gain?device=${device}&index=${index}`);
  }

  stop() {
    return this.http.get<boolean>(environment.apiURL + "stop");
  }
}
