import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/services/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<Contact[]>
  // selectedContactId: string

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

}
