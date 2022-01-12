import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';

const routes: Routes = [
  { path: 'unicorns', component: UnicornListComponent },
  { path: 'unicorn/:id', component: UnicornComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
