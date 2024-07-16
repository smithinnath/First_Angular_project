import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent implements OnInit {
  bedroom2 = "../../assets/images/bedroom2.jpg"

 constructor() { } 
 
 ngOnInit() { 
 } 
}