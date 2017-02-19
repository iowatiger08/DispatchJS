import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule}    	from '@angular/forms';
import { RouterModule}		from '@angular/router';
import { HttpModule } 		from '@angular/http';

import { AppComponent }  	  from './app.component';
import { environment } 		  from './environment';
import { routing } 			    from './app.routes';
import { LoadFormComponent} from './home'; 
import { MsgUploadComponent}from './upload';
import { NoContentComponent}from './no-content'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing) 
  ],
  declarations: [ 
    AppComponent , 
    LoadFormComponent, 
    MsgUploadComponent,
    NoContentComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
