import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ListPostComponent } from './post/list-post.component';
import { NewPostComponent } from './post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { AppRootingModule } from './app.rooting.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRootingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
