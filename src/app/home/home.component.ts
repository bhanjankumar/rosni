import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const img_icon = document.getElementById('img-con');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const images = ['la.jpg','chicago.jpg','ny.jpg'];

    let i = images.length;

    next.onclick = () => { 
      i = (i<images.length) ? (i=i+1):(i=1);
      img_icon.innerHTML = "<img class='img' src =assets/images/"+images[i-1]+ ">";
    }

    prev.onclick = () => {
      i = (i<images.length && i >1) ? (i=i-1):(i=images.length);
      img_icon.innerHTML = "<img class='img' src=assets/images/"+images[i-1]+ ">";
    }
  }

}
