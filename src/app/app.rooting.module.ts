import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './post/new-post.component';
import { ListPostComponent } from './post/list-post.component';
 
const appRoutes : Routes = [
  { path : 'posts' , component : ListPostComponent },
  { path : 'newPost' , component : NewPostComponent},
  { path : '' , redirectTo : 'posts', pathMatch : 'full' },
  { path : '**' , redirectTo : 'posts'}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRootingModule { }
