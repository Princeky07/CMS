import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Message } from '../../messages.model'

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('messageInput') messageInputRef:ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();
  currentSender = "Student"

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const msgSubject = this.subjectInputRef.nativeElement.value;
    const msgText = this.messageInputRef.nativeElement.value;
    const id = "0123"
    const newMessage = new Message(id, msgSubject, msgText, this.currentSender);
    this.messageAdded.emit(newMessage);
  }

}
