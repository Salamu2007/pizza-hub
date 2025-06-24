import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-resteau',
  imports: [CommonModule,FormsModule],
  templateUrl: './register-resteau.html',
  styleUrl: './register-resteau.css',
  standalone: true
})
export class RegisterResteau {
  restaurant = {
    name: '',
    email: '',
    password: '',
    address: ''
  };

  registerRestaurant() {
    console.log('مطعم جديد:', this.restaurant);
    this.restaurant = {
    name: '',
    email: '',
    password: '',
    address: ''
  };
  }
}
