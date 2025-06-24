import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule], // ضروري للـ *ngFor
  templateUrl: './orders.html',
  styleUrls: ['./orders.css']
})
export class Orders {
  orders = [
    { id: 1, customer: 'علي', pizza: 'مارغريتا', price: 800, status: 'confirmed' },
    { id: 2, customer: 'سارة', pizza: 'بيبروني', price: 950, status: 'confirmed' },
    { id: 3, customer: 'نادر', pizza: 'أربع أجبان', price: 1100, status: 'confirmed' }
  ];
  
nextStatus(order: any) {
  const statusFlow = ['pending', 'confirmed', 'delivering', 'delivered', 'paid'];
  const currentIndex = statusFlow.indexOf(order.status);
  if (currentIndex < statusFlow.length - 1) {
    order.status = statusFlow[currentIndex + 1];
    // هنا تحفظ التغييرات فـ Firebase أو service حسب طريقتك
  }
}
getStatusLabel(status: string): string {
  switch(status) {
    case 'pending': return 'في الانتظار';
    case 'confirmed': return 'تم التأكيد';
    case 'delivering': return 'قيد التوصيل';
    case 'delivered': return 'تم الاستلام';
    case 'paid': return 'تم الدفع';
    default: return '';
  }
}



}
