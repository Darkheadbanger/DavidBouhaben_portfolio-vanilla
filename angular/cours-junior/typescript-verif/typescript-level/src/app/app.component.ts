import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>{{coco}}</div>',
})
export class AppComponent implements OnInit {
  coco = 'coco'; // etat 0

  constructor() {}

  ngOnInit(): void {
    // etat 1
    this.coco = 'Bobo';
    this.logger(this.coco);
  }

  public logger(parametreA: string): void { 
    console.log('Etat', parametreA);
  }
}
// TS: revoir l'héritage et le scope
// Voir les differents états d'un component de l'angular (exemple ngOnInit, état de coco)
