import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  num:number = 0;
  incrementer: any;


  @Output()
  incrementingNumber: EventEmitter<any> = new EventEmitter<any>(); 





  constructor() { }

  ngOnInit(): void {
    
  }

  

  emitCount() {
    this.incrementer = setInterval(()=>{
      this.num += 1;
    }, 1000)
    console.log(this.num);
    this.incrementingNumber.emit(this.num);
  }

  stopCount() {
    console.log(this.num);
    clearInterval(this.incrementer);
  }


}
