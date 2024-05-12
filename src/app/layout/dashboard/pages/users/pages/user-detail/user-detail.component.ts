import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../users.service';
import { Observable, finalize } from 'rxjs';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
user$: Observable<IUser | undefined>

loading = false

constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

  // HAY DOS MANERAS LA 1
  /*
  this.activatedRoute.params.subscribe({
    next: (v) => console.log(v)
  });
  */
 // LA 2 
  // this.activatedRoute.snapshot.params
  this.loading = true
  this.user$ = this.userService.getUserById(this.activatedRoute.snapshot.params['id']).pipe(
    finalize(()=> {
      this.loading = false
    })
  )
}
}
