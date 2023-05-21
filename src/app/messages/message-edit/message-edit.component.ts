import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
})
export class MessageEditComponent {
  @ViewChild('subject', { static: false }) subject: ElementRef;
  @ViewChild('msgText', { static: false }) msgText: ElementRef;
  constructor(private messServe: MessageService) {}
  onSendMessage() {
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const newMessage = new Message('3', subject, msgText, 'Bradley Palmer');
  }
  onClear() {}
}
