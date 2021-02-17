import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";


const Card = ({ cardIndex, columnIndex, children, onRemove }) =>
  typeof cardIndex !== "undefined" ? (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{children}</span>
          <div
            onClick={onRemove.bind(this, columnIndex, cardIndex)}
            className="remove-btn"
          >

          </div>
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Card;
