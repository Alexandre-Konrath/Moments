import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentsComponent } from './pages/new-moments/new-moments.component';
import { MomentComponent } from './pages/moment/moment.component';
import { EditComentComponent } from './pages/edit-coment/edit-coment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewMomentsComponent },
  { path: 'moments/edit/:id', component: EditComentComponent },
  { path: 'moments/:id', component: MomentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
