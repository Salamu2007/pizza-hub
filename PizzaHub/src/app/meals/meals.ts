import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './meals.html',
  styleUrls: ['./meals.css']
})
export class Meals {
  products = [
    {
      name: 'مارغريتا',
      description: 'جبن طازج، صلصة طماطم، وأعشاب',
      price: 800,
      image: 'assets/images/margherita.jpg'
    },
    {
      name: 'بيبروني',
      description: 'جبن، طماطم، وشرائح البيبروني',
      price: 950,
      image: 'assets/images/pepperoni.jpg'
    }
  ];

  newProduct = { name: '', description: '', price: 0, image: '' };
  editMode = false;
  editIndex = -1;

  onSubmit() {
    if (this.editMode) {
      this.products[this.editIndex] = { ...this.newProduct };
      this.editMode = false;
    } else {
      this.products.push({ ...this.newProduct });
    }
    this.newProduct = { name: '', description: '', price: 0, image: '' };
  }

  editProduct(index: number) {
    this.newProduct = { ...this.products[index] };
    this.editMode = true;
    this.editIndex = index;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
