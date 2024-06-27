export type NoteType = "natural" | "flat" | "sharp";
export type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G"
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type MidiValue = number;
export type PitchIndex = number;

export type Note = {
    midi: MidiValue
    type: NoteType

    pitch: NotePitch
    index: PitchIndex
    octave: OctaveIndex
}

const C1_MIDI_NUMBER = 24;

// starting key for keyboard
const C4_MIDI_NUMBER = 60;

// ending key for keyboard
const B5_MIDI_NUMBER = 83;

export const LOWER_NOTE = C4_MIDI_NUMBER;
export const HIGHER_NOTE = B5_MIDI_NUMBER;
export const SEMITONES_IN_OCTAVE = 12;

// indices of all natural notes
export const NATURAL_PITCH_INDICES: PitchIndex[] = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
]

// Record<K, T> 
// type will create type of properties K with value of type T
export const PITCHES_REGISTRY: Record<PitchIndex, NotePitch> = {
    0: "C",
    1: "C",
    2: "D",
    3: "D",
    4: "E",
    5: "F",
    6: "F",
    7: "G",
    8: "G",
    9: "A",
    10: "A",
    11: "B"
}

export function fromMidi(midi: MidiValue): Note {
    // figure out what the octave
    const pianoRange = midi - C1_MIDI_NUMBER
    const octave = (Math.floor(pianoRange / SEMITONES_IN_OCTAVE) + 1) as OctaveIndex

    // find the pitch of the note
    const index = pianoRange % SEMITONES_IN_OCTAVE
    const pitch = PITCHES_REGISTRY[index];

    const isSharp = !NATURAL_PITCH_INDICES.includes(index);
    const type = isSharp ? "sharp" : "natural"

    return { octave, pitch, index, type, midi}
}