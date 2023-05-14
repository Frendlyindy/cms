import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent {
  documents: Document[] = [
    {
      id: 1,
      name: 'name 1',
      description: 'iuwhdfiuhwsfihwiohf',
      url: 'www.test.com',
      children: null,
    },
    {
      id: 2,
      name: 'name 2',
      description: 'iuwhdfiuhwsfihwiohf',
      url: 'www.test.com',
      children: null,
    },
    {
      id: 3,
      name: 'name 3',
      description: 'iuwhdfiuhwsfihwiohf',
      url: 'www.test.com',
      children: null,
    },
    {
      id: 4,
      name: 'name 4',
      description: 'iuwhdfiuhwsfihwiohf',
      url: 'www.test.com',
      children: null,
    },
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
