import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  @Output() contacts: Contact[];
  //   {
  //     id: '1',
  //     name: 'R. Kent Jackson',
  //     email: 'jacksonk@byui.edu',
  //     phone: '2085551414',
  //     imageUrl: '../../assets/images/jacksonk.jpg',
  //     group: null,
  //   },
  //   {
  //     id: '2',
  //     name: 'Rex Barzee',
  //     email: 'barzeer@byui.edu',
  //     phone: '2085554141',
  //     imageUrl: '../../assets/images/barzeer.jpg',
  //     group: null,
  //   },
  // ];
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
