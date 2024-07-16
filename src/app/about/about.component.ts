import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
   
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
   ImagePath1 = "../../assets/images/hostal1.jpg"
  ImagePath2 = "../../assets/images/ichan.jpg"
  ImagePath4 = "../../assets/images/hostal2.jpg"
  ImagePath3 = "../../assets/images/ichan2.jpg"
  ImagePath5 = "../../assets/images/hostal3.jpg"
  ImagePath6 = "../../assets/images/hostal5.jpg"
  constructor() { } 
  
  ngOnInit() { 
  } 
}
