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
        {selectedItem ? selectedItem : 'Stauts'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('Open')}
          >
           Open
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('In Progress')}
          >
           In Progress
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleItemClick('Completed')}
          >
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
