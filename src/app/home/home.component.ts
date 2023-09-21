import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contactData: any;
  constructor(private userData: UserDataService)
  {
    
  }
  getContactFormData(data: any) {
    this.userData.saveContactData(data).subscribe((result)=> {
      console.log(result)
    })
  }
}
