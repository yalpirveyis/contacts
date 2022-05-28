import React, { useState } from "react";
export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filteredText = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div>
      <h1>Filter</h1>
      <input
        placeholder="Filter"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <h1>Contacts List ({filteredText.length})</h1>
      <ul className="list">
        {filteredText.map((item, i) => (
          <li key={i}>
            <span>{item.fullname}</span>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
