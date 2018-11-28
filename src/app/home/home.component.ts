import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['la.jpg','chicago.jpg','ny.jpg'];
  i = this.images.length;
  imgSrc = '';
  
  constructor() { 
    this.imgSrc = "assets/images/chicago.jpg";
  }
    ngOnInit() {
    //   var myInterval = setInterval( () => {
    //     if (this.next()){
    //         clearInterval(myInterval);
    //     }
    // },2000)
    }
    
    next = () => {
      //clearInterval();
      this.i = (this.i<this.images.length) ? (this.i=this.i+1):(this.i=1);
      this.imgSrc = "assets/images/"+this.images[this.i-1];
    }

    previous = () => {
      this.i = ( this.i >1) ? (this.i=this.i-1):(this.i=this.images.length);
      this.imgSrc = "assets/images/"+this.images[this.i-1];
    }
  

}
