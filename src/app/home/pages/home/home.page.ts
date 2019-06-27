import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _navCtrl: NavController
  ) {

  }

  navToFeature() {
    this._navCtrl.navigateForward(['feature']);
  }

  ngOnInit() {
    console.log('Route Snapshot: ', this._activatedRoute.snapshot);
    console.log('QueryParams: ', this._activatedRoute.snapshot.queryParams);
    console.log('Params :', this._activatedRoute.snapshot.params);
  }
  
}
