import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFund } from "pages/PageNotFound/PageNotFound";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<App />}>
                  <Route path="/" element={<NoteBrowse />} />
                  <Route path="/note/:noteId" element={<Note />} />
                  <Route path="/note/new" element={<NoteCreate />} />
                  <Route path="*" element={<PageNotFund />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </Provider>
   </StrictMode>
);
