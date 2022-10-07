import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { TramiteDeCreditoComponent } from './tramite-de-credito/tramite-de-credito.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialComponent } from './historial/historial.component';
import { SoporteComponent } from './soporte/soporte.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'tramite-de-credito', pathMatch: 'full' }, { path: 'tramite-de-credito', component: TramiteDeCreditoComponent, data: { text: 'Tramite de credito' } }, { path: 'expediente', component: ExpedienteComponent, data: { text: 'Expediente' } }, { path: 'historial', component: HistorialComponent, data: { text: 'Historial' } }, { path: 'soporte', component: SoporteComponent, data: { text: 'Soporte' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
