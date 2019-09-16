import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhDynamicTheadComponent } from './components/table/dynamic-thead/dynamic-thead.component';
import { DynamicTbodyComponent } from './components/table/dynamic-tbody/dynamic-tbody.component';

@NgModule({
  declarations: [
    NhDynamicTheadComponent, 
    DynamicTbodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NhDynamicTheadComponent, 
    DynamicTbodyComponent
  ]
})
export class NgHelpersModule { }
