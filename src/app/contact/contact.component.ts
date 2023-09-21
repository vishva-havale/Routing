import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user_id: any;
  


  constructor(private route: ActivatedRoute,private dataService: UserDataService,private router: Router) { }
  ngOnInit(): void{
    console.warn("user id is", this.route.snapshot.paramMap.get('id'));
    this.user_id = this.route.snapshot.paramMap.get('id');
  }
  contactform(item:any) {
    console.log(item);
  }
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('')
  })
  loginUser(data:any) {
    // console.log(this.loginForm.value);
    console.log("contact form data", data)
    this.dataService.addContactInfo(data).subscribe(responce => {
      console.log("add contact information responce :-",responce)
    })
  }
  get user() {
    return this.loginForm.get('user')
  }

  OpenContactComponent() {
    console.log("open contact component")
    this.router.navigate(['/OpenContactComponent']);
  }
}
