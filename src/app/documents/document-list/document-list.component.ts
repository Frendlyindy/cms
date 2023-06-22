import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../documents.model';
import { DocumentsService } from '../documents.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() documents: Document[];
  subscription: Subscription;
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  constructor(
    private documentService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onNewDocument() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
