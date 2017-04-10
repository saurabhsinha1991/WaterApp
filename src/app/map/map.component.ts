import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DataService]
})
export class MapComponent implements OnInit {
  
  title: string = 'Map';
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers = [];

  constructor(private dataService: DataService) { }


  ngOnInit() {
  	this.dataService.fetchData().subscribe( (data) => {
  		this.markers = data;
  	});
  }

}