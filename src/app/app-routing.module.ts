import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Component1Component } from './component1/component1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';

const routes: Routes = [
  {
    path: 'parent', component: ParentComponent,
    children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  {
    path: 'parent1', component: Parent1Component,
    children: [
      { path: 'child1', component: Child1Component }
    ]
  },
  {
    path: 'parent2', component: Parent2Component,
    children: [
      { path: 'child2', component: Child2Component }
    ]
  },
  {
    path: 'parent3', component: Parent3Component
  },
  { path: 'child3', component: Child3Component },
  { path: 'comp1', component: Component1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
