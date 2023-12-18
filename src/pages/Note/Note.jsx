import { useParams } from "react-router-dom"
import s from "./style.module.css"
import { useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";

export function Note(props) {
    const { noteId } = useParams();
    const note = useSelector((store) => store.NOTE.noteList.find(note => note.id === noteId));

    return (
        <>
            {note && (
                <NoteForm
                    isEditable={false}
                    title={note.title}
                    note={note}
                    onClickEdit={() => ""}
                    onClickTrash={() => ""}
                />
            )}
        </>
    );
}