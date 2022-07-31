import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor']
  deletedHero: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  eraseHero(): void {
    console.log("borrando...");
    this.deletedHero = this.heroes.shift() || ""

  }

}
