import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;
  post :Post;

  constructor( private postService: PostService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title : ['', Validators.required],
      content : ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post();
    newPost.title = title;
    newPost.content = content;
    newPost.loveIts = 0;
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
