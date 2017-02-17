import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<load-form></load-form>'
  /*template: `<h1>{{title}} </h1> <br/>
  <h3>Hello</h3> <br/> 
  <h5> {{manifestLabel}} <input #manifest/> <br/>
  {{driverLabel}}
  <input #driver /> <br/>
  {{carrierLabel}}
  <input #carrier (keyup.enter)="onEnter(carrier.value)"/> <br/>
  {{uploadFileLabel}} <button (click)="onClickMe()">Send file</button><br/>
  </h5>
    <button (click)="onClickMe()">Send</button>
    {{clickMessage}}
  `,*/
})
export class AppComponent  { 
  title = 'LoadDispatch Web';
  manifestLabel = 'Enter Manifest Id'; 
  driverLabel ='Enter Driver ';
  carrierLabel = 'Enter Carrier Name';
  uploadFileLabel ='Upload Message File Here';
  clickMessage = '';

  onEnter(value: string){
    this.onClickMe(); 
  }

  onClickMe() {
    this.clickMessage = 'Sending info to Dynamo and notify!';
  }
}
