import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { KeyboardWithInstrument } from "../Keyboard";

export const Main = () => {
    const AudioContext = useAudioContext();
    return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};