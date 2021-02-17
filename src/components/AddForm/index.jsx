import React from "react";
import { Button, Card } from "../../components";


const AddForm = ({
  value,
  showForm,
  setValue,
  columnIndex,
  textareaRef,
  setShowForm,
  children,
  onAdd,
  isEmptyColumn
}) => {
  return showForm ? (
    <div className="add-form">
      <div className="add-form__input">
        <Card>
          <textarea
            onChange={e => setValue(e.target.value)}
            value={value}
            placeholder={
              isEmptyColumn
                ? "Введите название колонку"
                : "Введите название карточку"
            }
            ref={textareaRef}
            rows="3"
          />
        </Card>
        <div className="add-form__bottom">
          <Button onClick={onAdd}>
            {isEmptyColumn ? "Добавить колонку" : "Добавить карточку"}
          </Button>

        </div>
      </div>
    </div>
  ) : (
    <div className="add-form__bottom">
      <div
        onClick={setShowForm.bind(this, true)}
        className="add-form__bottom-add-btn"
      >
        {/*<img src={addSvg} alt="Add svg icon" />*/}
        <span>
          {isEmptyColumn
            ? "Добавить еще одну колонку"
            : "Добавить еще одну карточку"}
        </span>
      </div>
    </div>
  );
};

export default AddForm;
