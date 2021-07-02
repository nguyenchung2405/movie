import React from "react";
import { useState, useRef } from "react";
export default function SearchAdmin(props) {
  const { onSubmit } = props;
  const [searchTerm, setSeachTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSeachTerm(value);
    if (!onSubmit) return;
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>
    </div>
  );
}
