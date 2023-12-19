import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ValidatorService } from "services/form-validators";
import { FieldError } from "FieldError/FieldError";

// Définition des validateurs pour les champs du formulaire
const VALIDATORS = {
   title: (value) => {
      return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
   },

   content: (value) => {
      return ValidatorService.min(value, 3);
   },
};

export function NoteForm({
   isEditable = true,
   note,
   title,
   onClickEdit,
   onClickTrash,
   onSubmit,
}) {
   const [formValues, setFormValues] = useState({
      title: note?.title || "",
      content: note?.content || "",
   });

   const [formErrors, setFormErrors] = useState({
      title: note?.title ? undefined : "",
      content: note?.content ? undefined : "",
   });

   // Vérifie s'il y a des erreurs dans le formulaire
   function hasError() {
      return Object.values(formErrors).some((error) => error !== undefined);
   }

   // Met à jour les valeurs du formulaire et valide le champ modifié
   function updateFormValues(e) {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
      validate(e.target.name, e.target.value);
   }

   // Valide un champ spécifique du formulaire
   function validate(fieldName, fieldValue) {
      setFormErrors({
         ...formErrors,
         [fieldName]: VALIDATORS[fieldName](fieldValue),
      });
   }

   // Icônes d'action pour éditer ou supprimer la note
   const actionIcons = (
      <div className="mb-5">
         <div className="col-1">
            {onClickEdit && (
               <PencilFill onClick={onClickEdit} className={s.icon} />
            )}
         </div>
         <div className="col-1">
            {onClickTrash && (
               <TrashFill onClick={onClickTrash} className={s.icon} />
            )}
         </div>
      </div>
   );

   const titleInput = (
      <div className="mb-5">
         <label className="form-label">Title</label>
         <input
            onChange={updateFormValues}
            type="text"
            name="title"
            className="form-control"
            value={formValues.title}
         />
         <FieldError msg={formErrors.title} />
      </div>
   );

   const contentInput = (
      <>
         <label className="form-label">Content</label>
         <textarea
            onChange={updateFormValues}
            type="text"
            name="content"
            className="form-control"
            row="5"
            value={formValues.content}
         />
         <FieldError msg={formErrors.content} />
      </>
   );

   const submitButton = (
      <div className={s.submit_btn}>
         <ButtonPrimary
            isDisabled={hasError()}
            onClick={() => onSubmit(formValues)}
         >
            Submit
         </ButtonPrimary>
      </div>
   );

   return (
      <form className={s.container}>
         <div className="row justify-content-space-between">
            <div className="col-10">
               <h2 className="mb-3">{title}</h2>
            </div>
            {actionIcons}
         </div>
         <div className={`mb-3 ${s.title_input_container}`}>
            {isEditable && titleInput}
         </div>
         <div className={`mb-3 ${s.content_input_container}`}>
            {isEditable ? contentInput : <pre>{note.content}</pre>}
         </div>
         {onSubmit && submitButton}
      </form>
   );
}
