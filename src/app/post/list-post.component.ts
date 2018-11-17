import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit, OnDestroy {

  posts : Post[];
  postSubscription : Subscription;
 
  constructor( private postService : PostService){
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      ( posts : Post[]) => {
        this.posts = posts;
      }

    );
    this.postService.getPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
