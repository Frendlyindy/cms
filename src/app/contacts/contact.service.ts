import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[];
  contactSelectedEvent = new EventEmitter<Contact>();
  maxContactId: any;
  ContactListChangedEvent: any;
  constructor() {
    this.contacts = MOCKCONTACTS;
  }
  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: String): Contact {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;

    for (const contact of this.contacts) {
      const currentId = Number(contact.id);

      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);

    const ContactsListClone = this.contacts.slice();
    this.ContactListChangedEvent.next(ContactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;

    const ContactsListClone = this.contacts.slice();
    this.ContactListChangedEvent.next(ContactsListClone);
  }

  deleteContact(Contact: Contact) {
    if (!Contact) {
      return;
    }

    const pos = this.contacts.indexOf(Contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);

    const ContactsListClone = this.contacts.slice();
    this.ContactListChangedEvent.next(ContactsListClone);
  }
}
