import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes:any=[{ id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }]
  constructor() { }

  ngOnInit() {
    
  }
  add = (name:string) =>{
    let keyval = this.heroes[this.heroes.length-1];
    this.heroes.push({ id: keyval.id+1, name: name })
     console.log()
  }

  delete = (name:string) =>{
    this.heroes = this.heroes.filter(function(index){
      return index != name;
    })
  }

}
