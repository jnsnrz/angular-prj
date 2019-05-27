import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  @Input() element: {id: number,  email: string, first_name: string, last_name: string, avatar: string};

  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  selectItem(elem: any) {
    this.select.emit(elem);
    console.log(`Selected ${elem}`);

  }

}
