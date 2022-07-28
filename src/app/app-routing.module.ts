import { ToggleComponent } from './components/TwoWayBinding/toggle/toggle.component';
import { AuthorListComponent } from './components/OutputBinding/author-list/author-list.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CurdComponent } from './components/curd/curd.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailComponent } from './components/OutputBinding/author-detail/author-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CurdComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'hello', component: HelloComponent},
  { path: 'authorList', component: AuthorListComponent},
  { path: 'authorDetail', component: AuthorDetailComponent},
  { path: 'twoWayBinding', component: ToggleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
