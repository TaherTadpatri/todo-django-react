import React, { useState } from 'react';

function DropdownMenu({ onDropdownChange }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onDropdownChange(item); 
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedItem ? selectedItem : 'Priority'} 
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('Highest')}
          >
           Highest
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('High')}
          >
           High
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('Medium')}
          >
            Medium
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('Low')}
          >
            Low
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
