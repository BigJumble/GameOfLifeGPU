class PlayerController {

    static x: number;
    static y: number;
    static playerSize = 40;
    static speed = 200;

    static fpsLimitBackup:number;
    static init()
    {
        this.fpsLimitBackup = Animator.FPSLimit;
    }

    static update(deltaTime: number) {

        if (Actions.isHeld(PlayerAction.Primary)) {
            Animator.FPSLimit = 0;
            GameManager.isDrawing = true;
        }
        else
        {
            Animator.FPSLimit = this.fpsLimitBackup;
        }
    }
}