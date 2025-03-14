import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Schedule from "../../Components/Schedule/Schedule";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Real.scss";

export default function Real() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [pinDB, setPinDB] = useState<any>("");

  const navigate = useNavigate();

  if (pinDB == "") {
    const db = getDatabase();
    const starCountRef = ref(db, "pins/");
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      if (data == null) {
        data = { "1": "Нет заметок" };
      }
      setPinDB(data);
    });
  }

  function checkPassword() {
    if (input == "12345") {
      navigate("/admin6283isd7f3w9j8s3j");
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }

  return (
    <div className="real">
      {showModal && (
        <div className="show" onClick={() => setShowModal(false)}>
          <div
            className="show_block"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <p>Введите пароль:</p>
            <input
              onChange={(event) => setInput(event.target.value)}
              type="password"
            />
            {showError && <p className="error_password">Не верный пароль!</p>}
            <div
              onClick={() => {
                checkPassword();
              }}
              className="password_button"
            >
              <p>Ввести</p>
            </div>
          </div>
        </div>
      )}
      <Schedule inputOrNo={true} />
      <h2>Заметки</h2>
      <ul>
        {Object.values(pinDB).map((item: any) => (
          <li>{item}</li>
        ))}
      </ul>
      <div onClick={() => setShowModal(true)} className="admin_button">
        <p>Администраторский вход</p>
      </div>
      <div className="end_info">
        <p>Версия приложения: 0.2</p>
        <p>Для предложений и отзывов: </p>
        <a href="https://t.me/Arhih1">https://t.me/Arhih1</a>
        <p>Поддержать проект:</p>
        <p>4585220012674312</p>
        <p>Исходный код находится на:</p>
        <p>https://github.com/ArhipSizov/MiniApps</p>
      </div>
    </div>
  );
}
