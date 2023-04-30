import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [{
    "id": 1,
    "name": "R. Kent Jackson",
    "email": "jacksonk@byui.edu",
    "phone": 2085551414,
    "imageUrl": "../../assets/images/jacksonk.jpg",
    "group": "null"
  },
  {
    "id": 2,
    "name": "Rex Barzee",
    "email": "barzeer@byui.edu",
    "phone": 2085554141,
    "imageUrl": "../../assets/images/barzeer.jpg",
    "group": "null"
  }
];


}
