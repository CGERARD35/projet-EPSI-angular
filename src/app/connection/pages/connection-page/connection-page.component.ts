import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Admin} from "../../../core/models/admin";
import {BehaviorSubject} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  public mail: string = '';
  public password: string = '';


  public user!: Admin[];

  constructor(private authService: AuthService, private router: Router,private toaster: ToastrService) {
  }

  ngOnInit(): void {
  }


  public login(): void {

    this.authService.authenticate(this.mail, this.password).subscribe({
        next: () => {
          this.router.navigate(['/clients']);
        },
        error: () => {
          this.toaster.error('', 'Email ou mot de passe inconnu.');
        }
      }
    )
  }


}
