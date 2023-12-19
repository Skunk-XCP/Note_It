import { NoteForm } from "components/NoteForm/NoteForm";
import s from "./style.module.css";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { addNote } from "store/note/note-slice";
import { useNavigate } from "react-router-dom";

export function NoteCreate(props) {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   async function createNote(formValues) {
      // Appel à l'API pour créer une note avec les valeurs du formulaire et la date actuelle
      const createNote = await NoteAPI.create({
         ...formValues,
         created_at: new Date().toLocaleDateString(),
      });

      // Dispatch l'action addNote avec la note créée
      dispatch(addNote(createNote));

      // Redirige l'utilisateur vers la page d'accueil après la création
      navigate("/");
   }

   return (
      <>
         <NoteForm title="Create a note" onSubmit={createNote} />
      </>
   );
}
