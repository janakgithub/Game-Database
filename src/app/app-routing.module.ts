import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "src/app/components/login/login.component";
import { GamesComponent } from "src/app/components/games/games.component";
import { GamedetailComponent } from "src/app/components/gamedetail/gamedetail.component";

const routes: Routes = [  
  {
    path:'', component: GamesComponent
  },
  {
    path:'home', component: GamesComponent
  },
  {
    path: 'search/:search', component: GamesComponent
  },
  {
    path: 'details/:id', component: GamedetailComponent
  },
  {
    path: 'login', component: LoginComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
