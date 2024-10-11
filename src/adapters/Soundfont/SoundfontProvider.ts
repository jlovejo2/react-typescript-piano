import { ReactElement, FunctionComponent, useState, useEffect, useRef, useCallback } from "react";
import SoundFont, { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";

type ProvidedProps = {
    loading: boolean
    play(note: MidiValue): Promise<void>;
    stop(note: MidiValue): Promise<void>;
}

type ProviderProps = {
    instrument?: InstrumentName
    AudioContext: AudioContextType
    render(props: ProvidedProps): ReactElement
}

export const SoundFontProvider: FunctionComponent<ProviderProps> = ({ AudioContext, instrument, render }) => {
    let activeNodes: AudioNodesRegistry = {};

    const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [player, setPlayer] = useState<Optional<Player>>(null);
    const audio = useRef(new AudioContext());
    const loadInstrument = useCallback(() => load(instrument), [instrument])

    useEffect(() => {
        if (!loading && instrument !== current) loadInstrument()
    }, [loadInstrument, loading, instrument, current])

    async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
        setLoading(true);
        const player = await SoundFont.instrument(audio.current, instrument);

        setLoading(false);
        setCurrent(instrument);
        setPlayer(player);
    }

    async function resume() {
        return audio.current.state === "suspended" ? await audio.current.resume() : Promise.resolve()
    }


    async function play(note: MidiValue) {
        await resume()
        if (!player) return

        const node = player.play(note.toString())
        activeNodes = {...activeNodes, [note]: node }

    }

    async function stop(note: MidiValue) {
        await resume()
        if (!activeNodes[note]) return

        //exclamation declares here that we are totally sure it is not null.
        activeNodes[note]!.stop();
        activeNodes = {...activeNodes, [note]: null}
    }

    return render({loading, play, stop})

}