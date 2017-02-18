import {Component } from  '@angular/core';
import {Load } from './load';

@Component ({
  moduleId: module.id,
  selector: 'load-form',
  templateUrl: './load-form.component.html'
})

export class LoadFormComponent {
/*
  routesAvailable = ['RuanCenterToDairyQueen', 'RuanCenterToAEDairy'];
*/
  loadStatus = ['Loading','InQueue', 'InTransit', 'BreakDown', 'Complete' , 'Reassigned' ]

  model = new Load (10001, 'beta000', 'MANIFEST-01', '2017-02-17:17:35', '0', '41.554155,-93.633069,17', 
    '41.5871194,-93.628328,17', 'tdillon', this.loadStatus[1], 'RenosChauffeur');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}