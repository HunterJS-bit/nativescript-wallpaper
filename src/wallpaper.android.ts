import { Common } from './wallpaper.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import * as imageSource from 'tns-core-modules/image-source';


export class Wallpaper extends Common {

	constructor() {
		super();
		this.service = application.android.app.WallpaperManager.getInstance(utils.ad.getApplicationContext());
	}

	setWallper(imgSrc: string) {
		console.log("setting wallpaper");
		console.log(imgSrc);
	}
}
