import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  public location:Object;
  constructor(private http : Http) { }

  fetchData () {
  	return this.http.get('./data/data.json').map( (res) => {
  			return res.json();
  		})
  }

  setLocation (obj) {
  	this.location = obj;
  }

  getLocation () {
  	return this.location;
  }


}
