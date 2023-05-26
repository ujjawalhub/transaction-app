import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/parent',
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'parent/:id',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
