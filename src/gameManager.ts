class GameManager {

    static adapter: GPUAdapter;


    static async init() {
        const adapter = await navigator.gpu.requestAdapter({powerPreference:"high-performance"});
        if (!adapter) {
            throw new Error("No appropriate GPUAdapter found.");
        }
        this.adapter = adapter;
        
    }


    static updatePhysics(deltaTime: number) {



    }

}