import { NoteAPI } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/note/note-slice";
import s from "./style.module.css";


export function App() {

  // Prépare le dispatch pour envoyer des actions Redux
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();

    // Dispatch l'action pour mettre à jour la liste des notes dans Redux
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>)
    ;
}
