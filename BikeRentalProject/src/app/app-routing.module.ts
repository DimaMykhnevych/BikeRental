import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikeViewComponent } from './bike-view/bike-view.component';
import { BookBikeComponent } from './book-bike/book-bike.component';
import { FaqComponent } from './faq/faq.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'bikeView', component: BikeViewComponent },
  { path: 'bikeInfo', component: BikeInfoComponent },
  { path: 'orderBike', component: BookBikeComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
