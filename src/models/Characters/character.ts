import { King } from '../../king';
import { Fighter } from '../../fighter';
import { Counselor } from '../../counselor';
import { Squire } from '../../squire';

const jeoffrey = new King('Jeoffrey', 'Baratheon', 12, 2);
const jamie = new Fighter('Jamie', 'Lannister', 31, 'big sword', 9);
const danaerys = new Fighter('Danaerys', 'Targaryen', 19, 'dracarys', 2);
const tyrion = new Counselor('Tyrion', 'Lannister', 26, danaerys);
const bronn = new Squire('Bronn', 'from the dark waters', 37, 4, jamie);

export const charactersArr = [jeoffrey, jamie, danaerys, tyrion, bronn];
