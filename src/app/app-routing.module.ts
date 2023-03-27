import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';
import { CustomerComponent } from './components/customer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cat', component: CatComponent },
  { path: 'dog', component: DogComponent },
  { path: 'customer/:custId', component: CustomerComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
