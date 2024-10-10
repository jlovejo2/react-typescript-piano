import { useAudioContext } from "../AudioContextProvider";
import { useSoundFont } from "../../adapters/Soundfont";
// import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument";

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()
    const { loading, current, play, stop, load } = useSoundFont({ AudioContext })

    // useMount(() => load())

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, instrument, current ])

    return <Keyboard loading={loading} play={play} stop={stop}/>
}