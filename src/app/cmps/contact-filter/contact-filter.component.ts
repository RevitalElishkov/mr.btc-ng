import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import { ContactFilter } from 'src/app/models/contact-filter'
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  filterBy: ContactFilter
  subscription: Subscription

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$.subscribe(filterBy=>{
      this.filterBy = filterBy
    })  }

  onSetFilter() {
    this.contactService.setFilter({...this.filterBy})
    
  }
}
