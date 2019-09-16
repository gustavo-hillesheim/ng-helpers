import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhDynamicTheadComponent, NhDynamicTbodyComponent } from './components/table';

@NgModule({
  declarations: [
    NhDynamicTheadComponent,
    NhDynamicTbodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NhDynamicTheadComponent,
    NhDynamicTbodyComponent
  ]
})
export class NhDynamicModule { }
