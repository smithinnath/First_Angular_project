import { Component,OnInit } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bathroom',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.css'
})
export class BathroomComponent implements OnInit {
  bathroom2 = "../../assets/images/bathroom2.jpg"

 constructor() { } 
 
 ngOnInit() { 
 } 
}