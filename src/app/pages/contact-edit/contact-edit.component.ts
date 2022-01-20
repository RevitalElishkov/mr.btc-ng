import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { Contact } from 'src/app/services/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {


  contact: Contact


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( async ({id})=>{
      this.contact = id ? await this.contactService.getContactById(id).toPromise() : this.contactService.getEmptyContact() as Contact
    })
  }

 async  onSaveContact() {
  await this.contactService.saveContact(this.contact)
  this.router.navigateByUrl('contact')
  }

  onBack() {
    if (this.contact._id) {
      this.router.navigateByUrl('contact/'+this.contact._id)
    } else this.router.navigateByUrl('contact')
  }


}
