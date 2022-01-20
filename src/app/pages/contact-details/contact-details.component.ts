import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { never, Observable } from 'rxjs';
import { Move } from 'src/app/models/move';
import { Moves } from 'src/app/models/moves';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/services/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  // @Input() contactId: string
  user$:Observable<User>
  user:User
  contact: Contact
  moves$:Observable<[]>
  mutualMoves: any
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      const contact = await this.contactService.getContactById(params['id']).toPromise()
      // console.log(contact);
      this.contact = contact
    })
    this.user = await this.userService.getLoggedUser()
          this.moves$ = this.userService.moves$
          this.moves$.subscribe(moves=>this.mutualMoves=moves)
          // console.log('mutualMoves', this.mutualMoves);

          // console.log('moves$', this.moves$);

      // this.user$ = this.userService.user$
      // this.user$.subscribe(user=> {
      // this.user = user
      // this.mutualMoves= user.moves}
      // )
    
      // console.log('mutualMoves', this.mutualMoves);
      this.mutualMoves = this.user.moves.filter((move: { toId: string; }) =>{ 
        // console.log(move);
        // console.log(this.contact);
       return move.toId === this.contact._id})
      // console.log('mutualMoves22', this.mutualMoves);
    // })
      // const mutualmoves = mutualmoves
      // this.mutualMoves = mutualmoves
    
    // const contact = await this.contactService.getContactById(this.contactId).toPromise()
    // this.contact = contact
  }

  onBack() {
    this.router.navigateByUrl('contact')
  }

  async onRemove(contactId:string) {
    // console.log('contactId', contactId);
    await this.contactService.deleteContact(contactId)
    this.router.navigateByUrl('contact')

  }

  goToEdit(contactId:string) {
    this.router.navigateByUrl(`edit/${contactId}`)
  }

  onTransferCoins= (amount:number)=>{
    console.log('amount-hi transfer', amount);
    this.userService.transferCoins(this.contact,amount)
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
}
