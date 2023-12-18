import s from "./style.module.css";

export function FieldError({ msg }) {
    return <span className={s.message_error}>{msg}</span>
}