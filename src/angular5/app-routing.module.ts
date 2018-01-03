import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabOneComponent} from "./tab-one/tab-one.component.ts";
import {TabTwoComponent} from "./tab-two/tab-two.component.ts";


const routes: Routes = [

    {
        path: 'angular5',
        redirectTo: 'angular5/tab-1',
        pathMatch: 'full',
        // children:[]
    },
    {
        path: 'angular5/tab-1',
        component: TabOneComponent
    },
    {
        path: 'angular5/tab-2',
        component: TabTwoComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
