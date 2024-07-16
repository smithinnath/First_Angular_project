import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 bedroom = "../../assets/images/bedroom.jpg"
 livingroom = "../../assets/images/livingroom.jpg"
 kitchen = "../../assets/images/kitchen.jpg"
bathroom = "../../assets/images/bathroom.jpg"
 constructor() { } 
 
 ngOnInit() { 
 } 
}


