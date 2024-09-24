async function main(){

    if (!navigator.gpu) {
        alert("Doesn't work on this browser, try Chrome / Edge / Opera")
        throw new Error("WebGPU not supported on this browser.");

    }


    Camera.init();
    Actions.init();
    await GameManager.init();
    Animator.update();
    Animator.logFPS();
}
main();