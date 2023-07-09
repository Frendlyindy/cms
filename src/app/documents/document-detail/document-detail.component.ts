import { Component, OnInit } from '@angular/core';
import { Document } from '../documents.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentsService } from '../documents.service';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
})
export class DocumentDetailComponent implements OnInit {
  nativeWindow: any;
  document: Document;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private docService: DocumentsService,
    private router: Router,
    private wind: WindRefService
  ) {
    this.nativeWindow = this.wind.getNativeWindow();
  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];

      this.document = this.docService.getDocument(this.id);
      this.nativeWindow = this.wind.getNativeWindow();
    });
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.docService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

  onEditDocument() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
