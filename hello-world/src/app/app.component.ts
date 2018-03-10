import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app teste';
  items: Observable<any[]>;
  @ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	latitude:number;
	longitude:number;	

  ngOnInit(db: AngularFirestore) {
    var mapProp = {
      center: new google.maps.LatLng(-12.981102, -38.456258),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  	var myLatlng = new google.maps.LatLng(-12.979517,-38.447974);
  	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title:"Hello World!"
	});
  	
  	marker.setMap(this.map);


  	var myLatlng2 = new google.maps.LatLng(-12.981336,-38.459982);
  	var marker2 = new google.maps.Marker({
	    position: myLatlng2,
	    title:"Hello World!2"
	});
  
  	marker2.setMap(this.map);
  	
  	this.items = db.collection('items').valueChanges();

  }
	

  setMapType(mapTypeId: string) {
   	this.map.setMapTypeId(mapTypeId);  
  }

  setCenter(e:any){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }


}
