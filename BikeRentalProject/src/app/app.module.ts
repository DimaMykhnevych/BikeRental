import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoTopButtonModule } from 'ng-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { BikeAnimationComponent } from './bike-animation/bike-animation.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BikeViewComponent } from './bike-view/bike-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BikeAnimationComponent,
    HowItWorksComponent,
    BikeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    GoTopButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
