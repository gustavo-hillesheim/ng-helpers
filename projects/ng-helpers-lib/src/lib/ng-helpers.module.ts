import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTheadComponent } from './components/table/dynamic-thead/dynamic-thead.component';
import { DynamicTbodyComponent } from './components/table/dynamic-tbody/dynamic-tbody.component';

@NgModule({
  declarations: [
    DynamicTheadComponent, 
    DynamicTbodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicTheadComponent, 
    DynamicTbodyComponent
  ]
})
export class NgHelpersModule { }
