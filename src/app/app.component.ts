import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = [
    {
      title: "Mon premier post",
      content: "Dumque ibi diu moratur commeatus opperiens, quorum translationem ex Aquitania verni imbres solito crebriores prohibebant auctique torrentes, Herculanus advenit protector domesticus, Hermogenis ex magistro equitum filius, apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti. quo verissime referente quae Gallus egerat, damnis super praeteritis maerens et futurorum timore suspensus angorem animi quam diu potuit emendabat.",
      loveIts: 0,
    },
    {
      title : "Mon deuxième post",
      content: "Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus adsueti. circumstetere igitur hoc munimentum per triduum et trinoctium et cum neque adclivitas ipsa sine discrimine adiri letali, nec cuniculis quicquam geri posset, nec procederet ullum obsidionale commentum, maesti excedunt postrema vi subigente maiora viribus adgressuri.",
      loveIts: 0
    },
    {
      title: "Mon troisième post",
      content: "Hac ita persuasione reducti intra moenia bellatores obseratis undique portarum aditibus, propugnaculis insistebant et pinnis, congesta undique saxa telaque habentes in promptu, ut si quis se proripuisset interius, multitudine missilium sterneretur et lapidum.",
      loveIts: 0
    }

  ]

  myPost  : Post[] = new Array();

  constructor(){

    for (let i=0 ; i < this.post.length; i++ ){
      const PostList = new Post();
      PostList.title = this.post[i].title;
      PostList.content = this.post[i].content; 
      PostList.loveIts = this.post[i].loveIts; 
      console.log(PostList);
      this.myPost.push(PostList);
    }
  }
    

}
