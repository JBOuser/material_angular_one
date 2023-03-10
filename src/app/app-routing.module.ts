import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { MenComponent } from './components/men/men.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'men', component:MenComponent, },
  { path: 'women', component:ListComponent, },
  { path: 'contact', component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
