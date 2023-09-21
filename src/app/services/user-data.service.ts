import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = 'https://localhost:7249/api/Employee/GetEmployee';
  
  constructor(private http: HttpClient) { }
  apiUsers()
  {
    return this.http.get('api-url')
  }
  GetEmployee()
  {
    // var employees = this.http.get(this.url);
    // console.log("vishva",employees)
    return this.http.get('https://localhost:7249/api/Employee/GetEmployee');
  }
  addEmployee(data:any)
  {
    return this.http.post('https://localhost:7249/api/Employee/CreateEmployee', data);
  }

  updateEmployee(data:any)
  {
    return this.http.put('https://localhost:7249/api/Employee/UpdateEmployee', data);
  }

  deleteEmployee(data: any) {
  return this.http.delete(`https://localhost:7249/api/Employee/DeleteEmployee/${data}`);
  }
  
  addContactInfo(data: any) {
    console.log("func call data",data)
    return this.http.post('https://localhost:7249/api/ContactInfo/addContactInfo',data);
  }

  users()
  {
    return [
      { name: 'anil', age: 28 },
      { name: 'mahesh', age: 38 },
      {name:'jayesh', age:68}
    ]
  }
  saveContactData(data:any)
  {
    return this.http.post(this.url, data);
  }
}
