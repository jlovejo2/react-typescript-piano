import { Optional } from "./types";

// helper function to determine if the browser has the audio context
export function accessContext(): Optional<AudioContextType> {
    return window.AudioContext || window.webkitAudioContext || null;
}