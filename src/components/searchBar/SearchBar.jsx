import { useState } from "react";
import "./SearchBar.scss";

const types = ["Buy", "Rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const SwitchType = (val) => {
    setQuery((prev) => ({ ...query, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={() => SwitchType(type)} className={query.type===type ? "active" : ""}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          min={0}
          max={100000}
          name="minPrice"
          placeholder="Min price"
        />
        <input
          type="number"
          min={0}
          max={100000}
          name="maxPrice"
          placeholder="Max price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
