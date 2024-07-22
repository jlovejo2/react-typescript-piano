import { FunctionComponent } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "../Key/Key.module.css";

type KeyProps = {
    type: NoteType
    label: string
    disabled?: boolean
    children?: React.ReactNode
}

export const Key: FunctionComponent<KeyProps> = ( props ) => {
    const { type, label, ...rest } = props;

    return (
        <button className={clsx(styles.key, styles[type])}
        type="button"
        {...rest}
        >
            {label}
        </button>
    )
}