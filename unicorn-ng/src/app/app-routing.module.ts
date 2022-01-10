import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';

const routes: Routes = [
  { path: 'unicorns', component: UnicornListComponent },
  { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
