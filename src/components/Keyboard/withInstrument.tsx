import { useAudioContext } from "../AudioContextProvider";
import { SoundFontProvider } from "../../adapters/Soundfont";
// import { useSoundFont } from "../../adapters/Soundfont";
// import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
// import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument";

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()
    // const { loading, current, play, stop, load } = useSoundFont({ AudioContext })

    // useMount(() => load())

    // Old usage with useSoundFont Hool
    // useEffect(() => {
    //     if (!loading && instrument !== current) load(instrument)
    // }, [load, loading, instrument, current ])

    // return <Keyboard loading={loading} play={play} stop={stop}/>

    return (
        <SoundFontProvider 
            AudioContext={AudioContext}
            instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />
    )
}