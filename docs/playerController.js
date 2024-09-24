"use strict";
class PlayerController {
    static x;
    static y;
    static playerSize = 40;
    static speed = 200;
    static update(deltaTime) {
        if (Actions.isClicked(PlayerAction.Left)) {
            console.log("a");
        }
        if (Actions.isHeld(PlayerAction.Right)) {
            console.log("a");
        }
    }
}
