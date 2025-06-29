import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-page.html',
  styleUrl: './customer-page.css'
})
export class CustomerPage {
  products = [
    { name: 'مارغريتا', description: 'جبن، صلصة طماطم، ريحان', price: 800, image: 'assets/margherita.jpg' },
    { name: 'بيبروني', description: 'جبن، صلصة، بيبروني حار', price: 950, image: 'assets/pepperoni.jpg' },
    { name: 'أربع أجبان', description: 'مزيج من الجبن الإيطالي', price: 1100, image: 'assets/4cheese.jpg' },
    { name: 'بيتزا دجاج', description: 'جبن، دجاج متبل، صوص باربكيو', price: 1050, image: 'assets/chicken.jpg' },
    { name: 'بيتزا خضار', description: 'جبن، خضار طازجة، زيتون', price: 900, image: 'assets/veggie.jpg' }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    const found = this.cart.find(item => item.name === product.name);
    if (found) {
      found.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  showConfirm = false;
  customerInfo = { name: '', address: '' };

  confirmOrder() {
    if (this.customerInfo.name && this.customerInfo.address) {
      console.log('تم تأكيد الطلب:', this.cart, this.customerInfo);
      alert(`✅ تم تأكيد طلبك يا ${this.customerInfo.name}!\n📦 سيتم التوصيل إلى: ${this.customerInfo.address}`);
      this.cart = [];
      this.showConfirm = false;
      this.customerInfo = { name: '', address: '' };
    } else {
      alert('يرجى ملء الاسم والعنوان!');
    }
  }

}
