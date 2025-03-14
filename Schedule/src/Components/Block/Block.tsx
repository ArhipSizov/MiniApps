import { useState } from "react";
import { ref, update } from "firebase/database";
import { database } from "../../Services/store/index";
import "./Block.scss";

export default function Block(item: any) {
  const [end, setEnd] = useState<boolean>(true);
  const [weekText, setWeekText] = useState<string>("");
  const [db, setDb] = useState<any>([]);
  const [dbHours] = useState<any[]>([
    "8:00",
    "8:55",
    "9:55",
    "10:50",
    "12:15",
    "13:10",
    "14:10",
    "15:05",
    "16:20",
    "17:15",
  ]);

  if (weekText == "") {
    const days = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    setWeekText(days[item.idWeek]);
  }
  if (end == true) {
    let hour = 0;
    let newDb: any = [];
    item.item.forEach(function (item: string) {
      newDb.push({ item: item, hour: dbHours[hour], id: hour });
      hour = hour + 1;
    });
    setEnd(false);
    setDb(newDb);
  }

  function updateDatabase(postData: any, idDay: any, idLesson: any) {
    const updates: any = {};
    updates["/week/" + idDay + "/lessons/" + idLesson] = postData;
    return update(ref(database), updates);
  }

  return (
    <div className="block">
      <h3>{weekText}</h3>
      {(item.inputOrNo && (
        <div className="block_grid">
          <p className="par_p1 par_p">1</p>
          <p className="par_p2 par_p">2</p>
          <p className="par_p3 par_p">3</p>
          <p className="par_p4 par_p">4</p>
          <p className="par_p5 par_p">5</p>
          {db.map((item: any) => (
            <p>
              {item.hour} {item.item}
            </p>
          ))}
        </div>
      )) || (
        <div>
          {db.map((item2: any) => (
            <div className="input_block">
              <p>{item2.hour}</p>
              <input
                onChange={(event) =>
                  updateDatabase(event.target.value, item.idWeek, item2.id)
                }
                type="text"
                defaultValue={item2.item}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
