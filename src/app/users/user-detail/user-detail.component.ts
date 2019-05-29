import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userId;

  constructor(private route: ActivatedRoute) { }

  goToUsersList() {

  }

  ngOnInit() {

    // read passed parameter in route
    let id = this.route.snapshot.paramMap.get('id');
    this.userId = id;
  }

}
