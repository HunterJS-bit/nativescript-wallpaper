var Wallpaper = require("nativescript-wallpaper").Wallpaper;
var wallpaper = new Wallpaper();

describe("greet function", function() {
    it("exists", function() {
        expect(wallpaper.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(wallpaper.greet()).toEqual("Hello, NS");
    });
});