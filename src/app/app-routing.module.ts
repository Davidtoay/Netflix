import { FilmsComponent } from './componentes/films/films.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "hero",
    component: HeroComponent,
  },
  {
    path: "films",
    component: FilmsComponent,
  },
  {
    path: "",
    redirectTo: "films",
    component: FilmsComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
