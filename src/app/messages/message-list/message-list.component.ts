import { Component } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent {
  messages: Message[] = [
    {
      id: 1,
      subject: 'Thing 1',
      msgText: 'some text to fill the msg',
      sender: 'Person Man',
    },
    {
      id: 2,
      subject: 'Thing 2',
      msgText: 'some text to fill the msg again',
      sender: 'Person Man',
    },
    {
      id: 14,
      subject: 'Thing 3',
      msgText: 'some text to fill the msg again again',
      sender: 'Person Man',
    },
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
