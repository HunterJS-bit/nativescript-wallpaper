import { Observable } from 'tns-core-modules/data/observable';

export class Common extends Observable {
  public service: any;

  constructor() {
    super();
  }

  public greet() {
    return "Hello, NS";
  }

  public setWallper(imgSrc: string) {}

}
