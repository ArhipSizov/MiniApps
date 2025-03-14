import "./FullName.scss";
import db from "../../Common/fullName.json";

export default function FullName() {
  return (
    <div className="full_name">
      {db.map((item: any) => (
        <div className="block_full_name">
          <p>{item[1]}</p>
          <p>{item[2]}</p>
        </div>
      ))}
    </div>
  );
}
