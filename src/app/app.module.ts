import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateCardComponent } from './candidate-card-component/candidate-card-component.component';
import { VotingNavComponent } from './voting-nav-component/voting-nav-component.component';
import { MatMenuModule, MatIconModule,MatButtonModule,MatCardModule,MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    CandidateCardComponent,
    VotingNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    Ng2CarouselamosModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
