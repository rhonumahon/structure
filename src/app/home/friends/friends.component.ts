import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  //interpolation binding {{}}
  //event binding (click)="displayName($event)"
  //property binding [names]="name"
  //two way data binding [(ngModule)]="something"
  name: any = "Clicked";
  myInterval: any;

  

  constructor() { }

  ngOnInit(): void {
    
   this.myInterval = setInterval(()=>{
    console.log("miko");
   }, 1000);

   setTimeout(()=>{
    console.log("Rhon");
   }, 3000);
  }

  displayName(event){
    console.log(event.target.id);
    if(event.target.id === "myFrend"){
      this.name = "myFriend";
    }else if(event.target.id === "notFriend"){
      this.name = "notMyFriend"
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    
  }

}
