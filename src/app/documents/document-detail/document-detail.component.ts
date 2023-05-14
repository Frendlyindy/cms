import { Component, Input } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
})
export class DocumentDetailComponent {
  @Input() document: Document;
}