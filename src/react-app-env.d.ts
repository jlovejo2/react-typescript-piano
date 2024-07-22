/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext

// added because some browsers support this on the window
interface Window extends Window {
    webkitAudioContext: AudioContextType
}

type SoundfondType = typeof Soundfont;
