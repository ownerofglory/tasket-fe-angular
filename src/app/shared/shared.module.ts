import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent
  ],
  declarations: [
    SharedComponent,
    NavComponent
  ]
})
export class SharedModule { }
