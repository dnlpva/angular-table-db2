import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTableComponent } from './test/test-table/test-table.component';

const routes: Routes = [
  { path: '**', component: TestTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 