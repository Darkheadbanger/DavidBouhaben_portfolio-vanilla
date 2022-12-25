import { Component } from '@angular/core';

@Component({
  // Le selector utilisé => voir dans index.html
  selector: 'app-root',
  // Le template ici "Inline" c'est à dire dans le même fichier
  template: `
    <div>
      <h2>bonjour {{ nom }}: :D</h2>
    </div>
  `,
  // styles: ['h2 { color: blue; }']
  styleUrls: ['./app.component.css'],
})

// La classe portant le nom du composant
export class AppComponent {
  nom: string;
  // TODO voir typescript.
  // Voir le modèle MPC
  // Remplacer

  // Affectation de la variable nom qui est interpolé
  constructor() {
    this.nom = 'Angular';
  }
}
