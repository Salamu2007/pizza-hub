import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [Logo,CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css' 
})
export class Sidebar {

}
