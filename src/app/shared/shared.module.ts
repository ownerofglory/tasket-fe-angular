import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './components/nav/nav.component';
import { SpacesMockService } from './services/mock/spaces-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerService } from './services/spinner/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavComponent,
    SpinnerComponent
  ],
  declarations: [
    SharedComponent,
    NavComponent,
    SpinnerComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
