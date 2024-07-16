import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livingroom',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livingroom.component.html',
  styleUrl: './livingroom.component.css'
})
export class LivingroomComponent implements OnInit {
  livingroom = "../../assets/images/livingroom.jpg"

 constructor() { } 
 
 ngOnInit() { 
 } 
}