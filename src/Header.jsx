import React from "react";

export default function Header() {
  return (
    <header>
      <form>
        <input
          className="search-box"
          type="search"
          placeholder="Enter a city..."
          required
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </header>
  );
}
