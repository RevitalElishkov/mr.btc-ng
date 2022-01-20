import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  coinsNum: number
  constructor() { }

  @Input() contactName: string
  @Input() maxCoins: number
  @Output() onTransfer = new EventEmitter<number>()

  ngOnInit(): void {
  }

  onTransferCoins(){
    if(this.coinsNum > this.maxCoins|| this.coinsNum <= 0) {
      console.log('above the max amount not approved');
      return
    }
    // console.log('this.coinsNum', this.coinsNum);
    this.onTransfer.emit(this.coinsNum)
    this.coinsNum = null


  }
}
