import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'author', loadChildren: './author/author.module#AuthorPageModule' },
  { path: 'i-biblioteca', loadChildren: './i-biblioteca/i-biblioteca.module#IBibliotecaPageModule' },
  { path: 'curriculum', loadChildren: './curriculum/curriculum.module#CurriculumPageModule' },
  { path: 'i-biblioteca/libro/:id', loadChildren: './libro/libro.module#LibroPageModule' },
  { path: '**', loadChildren: './error/error.module#ErrorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
