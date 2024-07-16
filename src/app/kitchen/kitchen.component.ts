import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit {
  kitchen = "../../assets/images/kitchen.jpg"

 constructor() { } 
 
 ngOnInit() { 
 } 
}