import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';
import { ContactService } from 'src/app/services/contact/contact.service';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  user$: any
  user:User
  rate: any
  moves: never[]
  // rate$: Observable<string> | Promise<string>

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.user$ = this.userService.user$
    this.user$.subscribe(user=> {
      this.user = user
      this.moves= user.moves.slice(0,3)}
      )
      console.log('user', this.user$);
    // this.moves =[...this.user.moves].slice(0,3)
    this.bitcoinService.getRate(this.user.coins).subscribe(rate=>{
      this.rate = rate
    })
    // this.rate$ = this.bitcoinService.getRate(this.user.coins)
  }

}
