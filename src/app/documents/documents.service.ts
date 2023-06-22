import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './documents.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  documents: Document[];
  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();
  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents;
  }

  getDocument(id: number): Document {
    return this.documents[id];
  }
}
