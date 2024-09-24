async function main(){

    if (!navigator.gpu) {
        throw new Error("WebGPU not supported on this browser.");
    }


    await Camera.init();
    await Actions.init();
    await GameManager.init();

    
    await Animator.update();
}
main();