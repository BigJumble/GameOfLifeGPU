class PlayerController {

    static x: number;
    static y: number;
    static playerSize = 40;
    static speed = 200;

    static update(deltaTime: number) {
        if (Actions.isClicked(PlayerAction.Left)) {
            console.log("a");
        }
        if (Actions.isHeld(PlayerAction.Right)) {
            console.log("a");
        }
    }
}