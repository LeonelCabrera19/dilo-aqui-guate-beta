import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []
export const PortalRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,
    PortalRouting
  ],
  declarations: []
})
export class PortalModule { }
