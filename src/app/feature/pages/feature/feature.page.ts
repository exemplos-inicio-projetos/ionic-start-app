import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedHttpService } from 'shared/services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.page.html',
  styleUrls: ['./feature.page.scss']
})
export class FeaturePage implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _sharedHttp: SharedHttpService,
    private _navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log('Route Snapshot: ', this._activatedRoute.snapshot);
    console.log('QueryParams: ', this._activatedRoute.snapshot.queryParams);
    console.log('Params :', this._activatedRoute.snapshot.params);
    this._sharedHttp.postTest();
  }

  navToHome() {
    this._navCtrl.navigateBack(['']);
  }

}
