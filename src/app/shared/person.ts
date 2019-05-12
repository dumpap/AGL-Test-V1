import { Pets } from './pets';

export class Person {
    name: string;
    gender: string;
    age: number;
    pets?: (Pets)[] | null;
  }
