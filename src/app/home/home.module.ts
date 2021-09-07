import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FriendsComponent} from '../home/friends/friends.component';



@NgModule({
  declarations: [FriendsComponent],
  imports: [
    CommonModule
  ],
  exports:[FriendsComponent]
})
export class HomeModule { }
