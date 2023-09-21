import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import * as AOS from 'aos';
interface dataType{
  name: string,
  id: number,
  indian: boolean,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rauting';
  users: any;
  emplo: any;
  constructor(private userdata: UserDataService, private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver)
  {
    console.log("called")
    // console.log("userdata ", userdata.users())
    userdata.GetEmployee().subscribe((data) => {
      console.log("data", data)
      this.emplo = data;
    });
    // console.log("employee data",this.emplo)
    // this.users = userdata.users()
    // this.emplo= userdata.GetEmployee().subscribe()

  }

  ngOnInit(): void{
    AOS.init();
    this.GetEmployee();
  }
  GetEmployee() {
    this.userdata.GetEmployee().subscribe((data) => {
      console.log("empdata", data)
      this.emplo = data;
    });
  }
 
  async loadContact()
    {
    this.viewContainer.clear();
    const { ContactComponent } = await import('./contact/contact.component')
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(ContactComponent)
    )
  }
  async loadAbout()
    {
    this.viewContainer.clear();
    const { AboutComponent } = await import('./about/about.component')
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AboutComponent)
    )
    }
  // model with interface
  getData()
  {
    const Data: dataType = {
      name: "anil kumar",
      id: 100,
      indian: true,
      address:"42, noida up"
    }
  }
 
}
