import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { KBArticles } from '../../../Models/kbarticles';
import { Subscriber, Subscription, observable } from 'rxjs';
import { ArticleService } from '../../../services/appservices/article.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import _ from 'lodash';

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss'],
  providers: [MessageService]
})
export class ReadmorearticleComponent implements OnInit, OnDestroy {
    public queryparams:any;
    private _subscriptions = new Subscription();
    constructor(
      private router: Router,
      private _data: ArticleService,
      private messageService : MessageService) {
      this._subscriptions.add(this.router.routerState.root.queryParams.subscribe((params: Params) => {
        this.queryparams = params['ArticleId'];
      }));
    }
    arr: KBArticles;
<<<<<<< HEAD
    artcle: KBArticles[];
    article: KBArticles[];
    arr1 = [];
    read_more:any;
    isAdmin:boolean=false;
    spinner:boolean=false;


    ngOnInit() {
        this.spinner=true;

=======
    read_more: any;
    isAdmin = false;
    spinner=false;

    ngOnInit() {
        this.spinner=true;
>>>>>>> 40b0bc49a4610fcc90da7fc4be7b0a5a558cd23f
     this.getByArticleId();


    }

    getByArticleId()
    {
      var req = {
        ArticleId : this.queryparams
      };
      console.log(req);

      this._data.getArticleById(req)
        .then(res => {
<<<<<<< HEAD
          if (res) {
            if (!_.isEmpty(res)) {
              this.arr = res;
              this.spinner=false;
=======
            if (res) {
                if (!_.isEmpty(res)) {
                    this.arr = res;
                    console.log(this.arr);
>>>>>>> 40b0bc49a4610fcc90da7fc4be7b0a5a558cd23f
              // this.read_more = this.arr["kbArticles"];
              console.log(this.arr);
              // this.artcle = _.toArray(this.arr);
              // console.log('arrar 1' + this.artcle[1]);
              // this.article = this.artcle;
              // console.log(this.article);
              this.messageService.add({ severity: 'success', summary: 'Success', detail: "success." });


            }

            else {
              this.arr;
            //   this.read_more = [];
              console.log("failed");
              this.messageService.add({ severity: 'error', summary: 'Error', detail: "failed." });
              return false;
            }
          }
        }, error => {


        })

    }
    ngOnDestroy(){
      this._subscriptions.unsubscribe();
    }
    onEditArticle(item){
      this.router.navigate(['/knowledge-base/edit'], { queryParams: { ArticleId: item.articleId } });
    }


}
