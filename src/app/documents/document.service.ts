import { Injectable, EventEmitter } from '@angular/core';
import{Document} from './documents.model'
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  documents: Document[] = [];

  documentSelected = new EventEmitter<Document>();

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document{
    for (let i = 0; i < this.documents.length; i++){
      if (this.documents[i].id ===id){
        return this.documents[i];
      } 
    }
    return null;
  }

}
