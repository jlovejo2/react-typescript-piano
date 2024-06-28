import { useRef } from "react"
import { Optional } from "../../domain/types"
import { accessContext } from "../../domain/audio"

export function useAudioContext(): Optional<AudioContextType> {
    const Audio_Context = useRef(accessContext())
    return Audio_Context.current;
}