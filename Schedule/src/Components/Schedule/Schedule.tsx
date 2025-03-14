import { useState } from "react";
import Block from "../../Components/Block/Block";
import { getDatabase, ref, onValue } from "firebase/database";
import db1 from "../../Common/week1.json";
import db2 from "../../Common/week2.json";
import "./Schedule.scss";

export default function Schedule({ inputOrNo, alt }: any) {
  const [showWeek, setShowWeek] = useState<boolean>(true);
  const [doWeek, setDoWeek] = useState<boolean>(true);
  const [numberLines, setNumberLines] = useState<string>("all_block " + getCookie("num"));
  const [week, setWeek] = useState<any>("");

  function getCookie(name: string) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  if (week == "") {
    const db = getDatabase();
    const starCountRef = ref(db, "/week");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setWeek(data);
    });
  }

  if (alt == true && doWeek == true) {
    if (showWeek == true) {
      setShowWeek(false);
      setDoWeek(false);
    } else {
      setShowWeek(true);
      setDoWeek(false);
    }
  }

  if (numberLines == "") {
    setNumberLines("all_block " + getCookie("num"));
  }

  if (!week) {
    return (
      <div>
        <p>Загрузка настоящего рассписания...</p>
      </div>
    );
  }

  return (
    <div className="schedule">
      <div className="choose_vie">
        <div
          onClick={() => (
            setNumberLines("all_block l1"), (document.cookie = "num=l1")
          )}
        >
          1 строка
        </div>
        <div
          onClick={() => (
            setNumberLines("all_block l2"), (document.cookie = "num=l2")
          )}
        >
          2 строки
        </div>
        <div
          onClick={() => (
            setNumberLines("all_block l3"), (document.cookie = "num=l3")
          )}
        >
          3 строки
        </div>
      </div>
      {alt || (
        <div>
          <h1>Реальное рассписание</h1>
          <div className={numberLines}>
            {week.map((item: any) => (
              <Block
                key={item.id}
                idWeek={item.id}
                item={item.lessons}
                inputOrNo={inputOrNo}
              />
            ))}
          </div>
        </div>
      )}
      {alt && (
        <div>
          <div>
            <h1>Нечётная неделя</h1>
            <div className={numberLines}>
              {db2.map((item: any) => (
                <Block
                  key={item.id}
                  idWeek={item.id}
                  item={item.lessons}
                  inputOrNo={inputOrNo}
                />
              ))}
            </div>
          </div>
          <div>
            <h1>Чётная неделя</h1>
            <div className={numberLines}>
              {db1.map((item: any) => (
                <Block
                  key={item.id}
                  idWeek={item.id}
                  item={item.lessons}
                  inputOrNo={inputOrNo}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
