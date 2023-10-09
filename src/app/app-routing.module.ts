import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplateDrivenComponent } from './templateDriven/templateDriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpComponent } from './Http/Http.component';
import { SignalComponent } from './Signal/Signal.component';

const routes: Routes = [
  { path: 'databinding', component: DatabindingComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveformComponent },
  { path: 'Http', component: HttpComponent },
  { path: 'signal', component: SignalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
