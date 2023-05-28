import { Component, OnInit } from '@angular/core';
import { Document } from '../documents.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private docService: DocumentsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];

      this.document = this.docService.getDocument(this.id);
    });
  }

  onEditDocument() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
