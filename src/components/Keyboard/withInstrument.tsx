import { useAudioContext } from "../AudioContextProvider";
import { useSoundFont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const { loading, play, stop, load } = useSoundFont({ AudioContext })

    useMount(() => load())

    return <Keyboard loading={loading} play={play} stop={stop}/>
}