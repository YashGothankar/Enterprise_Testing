import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicIndexComponentComponent } from './components/dynamic-index-component/dynamic-index-component.component';

const routes: Routes = [
  {path: "dynamic", component: DynamicIndexComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
