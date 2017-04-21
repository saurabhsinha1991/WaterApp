import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  location: any;
  Items: Array<Object>;

  constructor(private http : Http) {

  }

  fetchData() {
    return this.http.get('./data/data.json').map( (res) => {
        return res.json();
    })
  }

  setLocation(obj) {
    this.location = obj;
    this.fetchData().subscribe( (res) => {
      let lat = this.location.lat() + 5,
          lng = this.location.lng() + 5;
        for(var key in res) {
          if(res[key].lat < lat && res[key].lng < lng) {
            this.Items.push(res[key]);
          }
        }
        return this.Items;
    })
  }

  getItems() {
    return new Promise( (resolve, reject) => {
      resolve(this.Items);
    })
  }

}
