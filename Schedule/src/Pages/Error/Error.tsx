import "./Error.scss";
import { NavLink } from "react-router";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error404_p">404</h1>
      <h1>Страница не найдена</h1>
      <div>
        <h3>
          Скорее всего, вы попали сюда из-за опечатки в адресе страницы.
        </h3>
        <NavLink to="real">
          <p>вернуться на главную</p>
        </NavLink>
        <h3>или</h3>
        <a href="https://t.me/Arhih1">
          <p>свяжитесь с администрацией сайта.</p>
        </a>
      </div>
      <img src="/404.gif" alt="" />
    </div>
  );
}
