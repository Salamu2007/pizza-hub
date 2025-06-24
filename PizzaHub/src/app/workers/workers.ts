import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Worker{
  name: string;
  email:string;
  role:string;
  active:boolean;
};

@Component({
  selector: 'app-workers',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './workers.html',
  styleUrl: './workers.css'
})


export class Workers {

  newWorker : Worker={
    name: '',
    email: '',
    role: '',
    active: true
  };

  workers:Worker[] = [
    {name: 'محمد', email: 'mohamed@example.com', role: 'نادل', active:true},
    {name: 'اسلام', email: 'islam@example.com', role: 'طباخ', active:true}
  ];

  addWorker(){
    if (this.newWorker.name && this.newWorker.email && this.newWorker.role){
      this.workers.push(this.newWorker);
      this.newWorker={name: '', email: '', role: '', active:true};
    }
  };

  deleteWorker(index : number){
    this.workers.splice(index,1)
  };
  

}
