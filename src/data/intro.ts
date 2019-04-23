interface IntroConfigInterface {
    mousemove: {
        delay: number,
        tweenDuration: number,
    };
    sphere: {
        rotation: {
            x: number,
            y: number,
            z: number,
        },
    };
}

const introConfig: IntroConfigInterface = {
    mousemove: {
        delay: 8,
        tweenDuration: 30,
    },
    sphere: {
        rotation: {
            x: 0.03125,
            y: 0.03125,
            z: 0,
        },
    },
};

export {IntroConfigInterface as IntroConfig, introConfig};
