import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { StorageService } from '../storage/storage.service';

const STORAGE_KEY = 'users'
var gUser;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }
  

  // Mock the database
  private _userDb : User = {
    _id: 'u543',
    name: "Some One",
    coins: 100,
    moves: []
  }

  private _user$ = new BehaviorSubject<User>({_id:'', name:'', coins:100, moves: []});
  public user$ = this._user$.asObservable()

  private _moves$ = new BehaviorSubject<[]>([]);
  public moves$ = this._moves$.asObservable()

 public getLoggedUser() {
   this._user$.next(gUser)
   this._moves$.next(gUser.moves)
   return gUser
 
  }

  transferCoins(toContact, amount) {
    let newMove = this._getEmpthyMove(toContact,amount)
    gUser.moves.unshift(newMove);
    gUser.coins-= amount
    this._moves$.next(gUser.moves)
    // this._user$ = gUser
    this._user$.next(gUser)
    let users = this.storageService.load(STORAGE_KEY)
    const index = users.findIndex(user => user._id === gUser._id)
    if (index !== -1) {
      users[index] = gUser
      this.storageService.store(STORAGE_KEY, users)
    }
    console.log('gUser', gUser);
   }

  public signUp(username) {
    // console.log('signUser', username);
    // const newUser = _getNewUser(signUser.name)
    // let user;
    let users = this.storageService.load(STORAGE_KEY)
    if (users && users.length) {
      let existUser = users.find(user => user.name === username)
      if (existUser) gUser = existUser
      else {
        gUser = this._getNewUser(username)
        users.push(gUser)
      }
    }
    else {
      gUser = this._getNewUser(username)
      users = [gUser]
    } 

    this._user$.next(gUser)
    this._moves$.next(gUser.moves)
    this.storageService.store(STORAGE_KEY, users)
    // console.log('gUser', gUser);
    return gUser;
}

  private _getEmpthyMove(toContact,amount){
    return   {
           toId: toContact._id,
           to: toContact.name,
           at: Date.now(),
           amount,
       }
   }

  private _getNewUser(name) {
    console.log('name', name);
    return {
        _id: this._makeId(),
        name,
        coins: 100,
        moves: []
    }
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
   }

}

    

