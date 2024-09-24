class Animator {
    static isUpdating = false;
    static lastTimestamp = 0;
    static deltaTime = 0;
    static moveSpeed = 20;
    static FPSCounter = 0;
    static FPSLimit: number = 15; // 0 to disable
    static {

    }
    static logFPS() {
        // in console type: Animator.logFPS();
        setInterval(() => {
            console.log("FPS:", this.FPSCounter);
            this.FPSCounter = 0;
        }, 1000);


    }
    static update() {
        if (this.isUpdating) return;

        this.isUpdating = true;
        this.lastTimestamp = performance.now();
        
        setInterval(() => {
            if (Animator.FPSLimit !== 0) {
                requestAnimationFrame(Animator.#smoothUpdate);
            }
        }, 1000 / Animator.FPSLimit);
    }
    static #smoothUpdate(timestamp: number) {
        Animator.deltaTime = (timestamp - Animator.lastTimestamp) / 1000;
        Animator.lastTimestamp = timestamp;
        Animator.FPSCounter++;

        GameManager.updatePhysics(Animator.deltaTime);
        Camera.update(Animator.deltaTime);
        PlayerController.update(Animator.deltaTime);
        if (Animator.FPSLimit === 0)
            requestAnimationFrame(Animator.#smoothUpdate);
    }
}