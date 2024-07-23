import { FunctionComponent } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "../Key/Key.module.css";
import { usePressObserver } from "../PressObserver";

type PressCallback = () => void

type KeyProps = {
    type: NoteType
    label: string
    disabled?: boolean
    // children?: React.ReactNode

    onUp: PressCallback,
    onDown: PressCallback
}



export const Key: FunctionComponent<KeyProps> = ( props ) => {
    const { type, label, onUp, onDown, ...rest } = props;

    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp
    })

    return (
        <button 
            className={clsx(styles.key, styles[type], pressed && styles["is-pressed"])} 
            onMouseUp={onUp}
            onMouseDown={onDown}
            type="button"
        {...rest}
        >
            {label}
        </button>
    )
}