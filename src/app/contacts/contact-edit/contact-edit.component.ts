import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent {
  onCancel() {
    throw new Error('Method not implemented.');
  }
  onRemoveItem(_t27: number) {
    throw new Error('Method not implemented.');
  }
  groupContacts: any;
}
