import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static load(STORAGE_KEY: string) {
    throw new Error('Method not implemented.');
  }
  static store(STORAGE_KEY: string, users: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  public store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

  public load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
}
