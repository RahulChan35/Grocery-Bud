import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div className="grocery-item" key={id}>
            <p className="title">
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </p>
            <div className="btn-container">
              <button className="btn edit-btn">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button className="btn delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
