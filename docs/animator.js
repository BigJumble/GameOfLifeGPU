"use strict";
class Animator {
    static isUpdating = false;
    static lastTimestamp = 0;
    static deltaTime = 0;
    static moveSpeed = 20;
    static FPSCounter = 0;
    static FPSLimit = 30;
    static {
    }
    static logFPS() {
        setInterval(() => {
            console.log("FPS:", this.FPSCounter);
            this.FPSCounter = 0;
        }, 1000);
        if (this.FPSLimit !== 0)
            setInterval(() => {
                requestAnimationFrame(Animator.#smoothUpdate);
            }, 1000 / Animator.FPSLimit);
    }
    static update() {
        if (this.isUpdating)
            return;
        this.isUpdating = true;
        this.lastTimestamp = performance.now();
        requestAnimationFrame((timestamp) => this.#smoothUpdate(timestamp));
    }
    static #smoothUpdate(timestamp) {
        Animator.deltaTime = (timestamp - Animator.lastTimestamp) / 1000;
        Animator.lastTimestamp = timestamp;
        Animator.FPSCounter++;
        GameManager.updatePhysics(Animator.deltaTime);
        Camera.update(Animator.deltaTime);
        if (Animator.FPSLimit === 0)
            requestAnimationFrame(Animator.#smoothUpdate);
    }
}
