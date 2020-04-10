import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './components/nav/nav.component';
import { SpacesMockService } from './services/mock/spaces-mock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavComponent
  ],
  declarations: [
    SharedComponent,
    NavComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
