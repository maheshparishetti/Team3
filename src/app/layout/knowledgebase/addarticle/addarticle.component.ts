import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { KBArticles } from '../../../Models/kbarticles';
import { DdlCatogoryName } from '../../../Models/ddlcategory';
import { ArticleService } from '../../../../app/services/appservices/article.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  addForm: FormGroup;
  toastMsg: Message[] = [];
  constructor(private fb: FormBuilder, private data: ArticleService, private route: Router) { }

  cat: DdlCatogoryName[] = [];

    ngOnInit() {
        this.data.getCategory().subscribe(
            (data: DdlCatogoryName[]) => {
            this.cat = data;
            console.log(this.cat);
            }
        );
        this.addForm = this.fb.group({
        article_name: new FormControl('',Validators.required),
        content: new FormControl('',Validators.required),
        category_id: new FormControl()
        });
    }

    onAddArticle() {
        console.log(this.addForm.value.content);
        if (this.addForm.value.content === '') {
            const validationMessage = 'Editor is empty';
            this.toastMsg = [];
            this.toastMsg.push({ severity: 'warn', summary: 'Message', detail: validationMessage });
        } else {
            this.data.addArticle(
                new KBArticles(
                    this.addForm.value.article_id,
                    this.addForm.value.article_name,
                    this.addForm.value.content,
                    this.addForm.value.previewcontent,
                    this.addForm.value.category_id,
                    this.addForm.value.category_name,
                    this.addForm.value.created_by,
                    this.addForm.value.created_by_name,
                    this.addForm.value.created_date,
                    this.addForm.value.modified_by,
                    this.addForm.value.modified_by_name,
                    this.addForm.value.modified_date
                )
            ).then((x) => {
                const successMessage = 'Article Added Successfuly';
                // debugger;
                this.toastMsg = [];
                this.toastMsg.push({ severity: 'success', summary: 'Success', detail: successMessage });
         },
            function(err) { console.log(err); });
        }
    }

  onClickClose() {
    this.route.navigate(['/knowledge-base']);
  }

}

