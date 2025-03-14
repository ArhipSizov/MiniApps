import "./Admin.scss";
import { useState } from "react";
import { database } from "../../Services/store/index";
import { getDatabase, ref, onValue, update } from "firebase/database";
import Schedule from "../../Components/Schedule/Schedule";

export default function Admin() {
  const [pin, setPin] = useState<string>("");
  const [id, setId] = useState<any>(-1);
  const [pinDB, setPinDB] = useState<any>({});
  const [showPinError, setShowPinError] = useState<boolean>(false);
  const [pinError, setPinError] = useState<string>("");

  if (id == -1) {
    setId(0);
    const db = getDatabase();
    const starCountRef = ref(db, "/pins");
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      if (data == null) {
        data = { "1": "" };
      }
      setPinDB(data);
      const obj = Object.keys(data);
      setId(obj.at(-1));
    });
  }

  function updateDatabase(id: any, postData: any) {
    if (pin.length !== 0 || postData == null) {
      const updates: any = {};
      updates["/pins/" + id] = postData;
      return update(ref(database), updates);
    } else {
      setShowPinError(true);
      setPinError("Введите данные!");
      setTimeout(() => {
        setShowPinError(false);
      }, 3000);
    }
  }

  return (
    <div className="admin">
      <h1>Режим Администратора!</h1>
      <h2>Тут вы можете изменить рассписание и добавлять заметки!</h2>
      <div className="pin">
        <h2>Добавить заметку</h2>
        <input onChange={(event) => setPin(event.target.value)} type="text" />
        {showPinError && <p>{pinError}</p>}
        <div onClick={() => updateDatabase(id / 1 + 1, pin)} className="button">
          <p>Добавить</p>
        </div>
        <div className="pin_e_all">
          <div>
            {Object.values(pinDB).map((item: any) => (
              <div className="pin_e">
                <li>{item}</li>
              </div>
            ))}
          </div>
          <div>
            {Object.keys(pinDB).map((item: any) => (
              <div className="pin_e">
                <li> </li>
                <img
                  onClick={() => updateDatabase(item, null)}
                  src="/close.svg"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Schedule inputOrNo={false} />
      <div className="footer">
        <p>В случае ошибки обратитесь к администратору</p>
        <a href="https://t.me/Arhih1">https://t.me/Arhih1</a>
      </div>
    </div>
  );
}
