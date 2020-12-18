import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoTopButtonModule } from 'ng-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BikeAnimationComponent } from './bike-animation/bike-animation.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BikeViewComponent } from './bike-view/bike-view.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookBikeComponent } from './book-bike/book-bike.component';
import { FormlyFieldStepper } from './stepper.type';

import { NotificationService } from './notification.service';
import { ToastrService } from 'ngx-toastr';
import { CommentsComponent } from './comments/comments.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BikeAnimationComponent,
    HowItWorksComponent,
    BikeViewComponent,
    BikeInfoComponent,
    BookBikeComponent,
    FormlyFieldStepper,
    CommentsComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    FormlyBootstrapModule,
    ToastrModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Это поле обязательно' },
        {
          name: 'pattern',
          message:
            'Email введен неверно, он должен быть вида: myemail@gmail.com',
        },
        { name: 'min', message: 'Вам должно быть больше 18 лет' },
      ],
      types: [
        {
          name: 'stepper',
          component: FormlyFieldStepper,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  providers: [ToastrService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
