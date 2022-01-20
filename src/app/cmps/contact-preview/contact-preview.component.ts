import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/services/contact/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact
  // @Output() onSelect = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  // onSelectesContact(){
  //   console.log('select', this.contact._id);
  //   // this.onSelect.emit(this.contact._id)
  // }
}
