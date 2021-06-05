import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'test';
  bgimg:any = "https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200";
  files: File[]=[];
  file: any[]=[];
  url: any;
  user: User

  constructor(private _user: UserService){

  }

  ngOnInit(): void {
    this.getUserData();

}

  uploadFile(event) {

    this.files = event.target.files;
    this.file.push(this.files[0])
    console.log(this.file)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      this.bgimg=this.url;
      this.user.coverphoto=this.url
    }

  }

  getUserData(){
    this._user.getPersonalInfo().subscribe(res=>{
      console.log(res)
      this.user=res
      console.log(this.user)
    },error=>{
      console.log(error)
    })
  }



}
