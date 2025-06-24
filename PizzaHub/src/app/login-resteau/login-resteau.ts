import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-resteau',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './login-resteau.html',
  styleUrl: './login-resteau.css'
})
export class LoginResteau {
  email = '';
  password = '';

  login(form:NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.email === 'admin@pizza.com' && this.password === '1234') {
      alert('✅ تم تسجيل الدخول بنجاح');
    } else {
      alert('❌ بريد إلكتروني أو كلمة مرور غير صحيحة');
    }
  }
}
