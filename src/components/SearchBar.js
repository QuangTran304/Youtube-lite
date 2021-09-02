import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
