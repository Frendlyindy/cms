import { Component, Input } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css'],
})
export class DocumentItemComponent {
  @Input() incomingDoc: Document;
  @Input() index: number;
}
