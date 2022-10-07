import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { TramiteDeCreditoComponent } from './tramite-de-credito/tramite-de-credito.component';
import { IgxSliderModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialComponent } from './historial/historial.component';
import { SoporteComponent } from './soporte/soporte.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    TramiteDeCreditoComponent,
    ExpedienteComponent,
    HistorialComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxSliderModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}
