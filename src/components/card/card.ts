/* eslint-disable no-unused-vars */
import { King } from '../../king';
import { Squire } from '../../squire';
import { Fighter } from '../../fighter';
import { Counselor } from '../../counselor';
import { Character } from '../../character';

export class Card extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <body>
  <div class="app container">
    <ul class="characters-list row list-unstyled">
      <li class="character col">
        <div class="card character__card">
          <img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">Nombre y familia</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${King.kingdomAge}</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    </ul>
  </div>
  <div class="comunications">
    <p class="comunications__text display-1">Una frase que dice alguien</p>
    <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre y familia del que habla" />
  </div>
</body>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
