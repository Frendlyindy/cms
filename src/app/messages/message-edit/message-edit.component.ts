import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
})
export class MessageEditComponent {
  @ViewChild('subject', { static: false }) subjectRef: ElementRef<String>;
  @ViewChild('msgText', { static: false }) msgRef: ElementRef<String>;
  currentSender: String = 'Bradley Palmer';
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const sentMsg: Message = {
      id: 3,
      subject: this.subjectRef.nativeElement,
      msgText: this.msgRef.nativeElement,
      sender: this.currentSender,
    };

    this.addMessageEvent.emit(sentMsg);
  }
  onClear() {
    this.msgRef.nativeElement = '';
    this.subjectRef.nativeElement = '';
  }
}
