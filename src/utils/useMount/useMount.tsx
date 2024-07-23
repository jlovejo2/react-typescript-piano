import { EffectCallback, useEffect } from "react";

// set the dependency array to empty so React runs the effect only once
const useEffectOnce = (effect: EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
}

type Effect = (...args: unknown[]) => void

export const useMount = (fn: Effect) => {
    useEffectOnce(() => {
        fn()
    })
}