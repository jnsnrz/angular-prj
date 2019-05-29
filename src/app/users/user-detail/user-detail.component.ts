import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public userId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // read passed parameter in route
    // let id = this.route.snapshot.paramMap.get('id');
    // this.userId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {

      let id = parseInt(params.get('id'));
      this.userId = id;

    });
  }

  goPrev() {
    let prevId = this.userId - 1;
    this.router.navigate(['/users', prevId]);

  }

  goNext() {
    let nextId = this.userId + 1;
    this.router.navigate(['/users', nextId]);
  }

  goToUsersList() {
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/users', { id: selectedId }]);

  }

}
