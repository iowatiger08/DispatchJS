import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'loaddispatchweb',
  template: `
  <h1>{{title}}</h1>
    <nav>
      <span>
        <a routerLink="/"  routerLinkActive="active">
          Index
        </a>
      </span>
      |
      <span>
        <a routerLink="/home" routerLinkActive="active">
          Home
        </a>
      </span>
      |
      <span>
        <a routerLink="/upload" routerLinkActive="active">
          Upload
        </a>
      </span>
      |

    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <span>LoadDispatch Starter by <a href="url">@iowatiger08</a></span>
      <div>
        <a href="url">
          <img src="ruanlogo" width="250">
        </a>
      </div>
    </footer>
  `
  //template: '<load-form></load-form>'
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
  //constructor( private router: Router){}

  onEnter(value: string){
    this.onClickMe(); 
  }

  onClickMe() {
    this.clickMessage = 'Sending info to Dynamo and notify!';
  }
}
