import Schedule from "../../Components/Schedule/Schedule";
import { NavLink } from "react-router";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <Schedule inputOrNo={true} alt={true} />
      <Schedule inputOrNo={true} />
      <div className="block_links">
      <NavLink className="link" to="/policy">
        <p>Условия пользования</p>
      </NavLink>
      <NavLink className="link" to="/creators">
        <p>Создатели</p>
      </NavLink>
      </div>
    </div>
  );
}
