import { Observable } from 'tns-core-modules/data/observable';
import { Wallpaper } from 'nativescript-wallpaper';

export class HelloWorldModel extends Observable {
  public message: string;
  private wallpaper: Wallpaper;

  constructor() {
    super();

    this.wallpaper = new Wallpaper();
    this.message = this.wallpaper.message;
  }
}
