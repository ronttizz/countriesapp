import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const itemCount = useSelector((state) => state.countries.favourites.length);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">
            Favourites {itemCount > 0 ? "(" + itemCount + ")" : ""}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
