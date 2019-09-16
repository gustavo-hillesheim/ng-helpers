import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhDynamicModule } from './dynamic/dynamic.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NhDynamicModule
  ],
  exports: [
    NhDynamicModule
  ]
})
export class NgHelpersModule { }
