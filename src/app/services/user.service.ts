import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User;

  getPersonalInfo(): Observable<any> {
  this.user = {
      name: "Dav Sing",
     location: "USA, Arizona",
     profession:"Student",
     followers: 500,
     lookingfor:  [{
       id:1,
       name: 'Addmission'
     },
     {
      id:2,
      name: 'Job'
    },
    {
      id:3,
      name: 'Scholer Ship'
    },],
    habits: [{
       id: 1,
       name: 'Social media scholer'
     },
     {
      id: 2,
      name: 'Life long beer lover'
    },
    {
      id: 3,
      name: 'Toral writer'
    },
    {
      id: 4,
      name: 'Twiter guru'
    },
    ],
     education: {
      studiedat:'University of arizona',
      cgpa: 3.50,
      ielts: 6.5,
      toefl: 540,
      achievments: 'Participate in Tech Talk by Marques at University of Arizona '
     },
     coverphoto: "backg.jpg",
     profilephoto:"profilephoto.jpg"
     }

  return  of(this.user)
}




}
