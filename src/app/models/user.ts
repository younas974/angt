import { Url } from "url";

export class User {
  name: string;
  location: string;
  profession: string;
  followers: number;
  lookingfor: LookingFor[];
  habits: Habit[];
  education: Education;
  coverphoto: any;
  profilephoto: any
}

export class Habit{
  id:number;
  name:string;
}

export class Education{
  studiedat: string;
  cgpa: number;
  ielts: number;
  toefl: number;
  achievments: string;
}

export class LookingFor{
  id: number;
  name: string;
}
