import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import { Items } from './app.interfaces';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  public location: Object;


  constructor(private http : Http) {

  }

  setLocation(obj) {
    this.location = obj;
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      resolve(this.location);
    });
  }

}
