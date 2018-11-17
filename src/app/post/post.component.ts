import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input () post : Post;
  @Input () index : number;

  constructor(private postService : PostService) { }

  ngOnInit() {
  }

  /**
   * contabliser les love en fonction du click sur les boutons
   * @param {string} avis 
   */

  onLove( avis : number){
    this.post.loveIts+=avis;
    this.postService.onEditPost(this.index, this.post);
  }

  /**
   * fonction qui attribue une couleur en fonction des love
   */

  getColor() {
    if (this.post.loveIts < 0) {
      return "#F3A8A8";
    } else if(this.post.loveIts > 0){
      return "#C4F3A8";
    } else { return "white";}
  }

  onDelete(){
    this.postService.deletePost(this.index);
  }

}
