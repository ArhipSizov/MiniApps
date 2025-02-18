import { useState } from "react";
import "./App.scss";

function App() {
  const [money, setMoney] = useState(0);
  const [moneyPass, setMoneyPass] = useState(0);
  const [timeClick, setTimeClick] = useState(0);
  const [add, setAdd] = useState(1);
  const [rand, setRand] = useState(10);
  const [randNum, setRandNum] = useState(11);
  const [randClic, setRandClic] = useState(16);
  const [showModalImg, setShowModalImg] = useState("img_block");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModalEnd, setShowModalEnd] = useState(true);
  const [showModalNew, setShowModalNew] = useState(false);

  const randomNum = Math.floor(Math.random() * 5) + rand;
  const randomClicks = Math.floor(Math.random() * 6) + 15;

  function buy(cost, newAdd, show, rand, pass) {
    if (cost <= money) {
      setMoney(money - cost);
      setAdd(add * newAdd);
      if (showModalNew == false) {
        show(true);
      } else {
        show(false);
        setMoneyPass(moneyPass + pass);
      }
      setRand(rand);
    }
  }

  function click() {
    setTimeClick(timeClick + 1);
    if (timeClick == randClic) {
      setRandClic(randomClicks);
      setTimeClick(0);
      setShowModalImg("none img_block");
      setMoney(money + moneyPass + add);
      setTimeout(() => {
        setShowModalImg("img_block");
      }, 1400);
      setTimeout(() => {
        setRandNum(randomNum);
      }, 1600);
    } else setMoney(money + add);
  }
  return (
    <div className="main">
      {showModalEnd || (
        <div className="end">
          <p>Спасибо за игру!</p>
          <p>(если хотите ещё что-нибудь, пишите мне)</p>
          <a href="https://www.google.com/search?sca_esv=749d405835975111&sxsrf=AHTn8zr60kYVAC981g6QwHeocTtiUjd87A:1739284628373&q=%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9+%D0%BA%D0%BE%D1%82%D0%B8%D0%BA&udm=2&fbs=ABzOT_CKIRl527HssJM7GkkftFFdT9wXpMg5JOoPG-L2OviVJ8RhTRUMqCD6ke33Qcn-EfDmp2hbhChjoApoWTMQhpJtxpZC3suB8MiR1JZqOfdRg7IzCIuScn_Yl4fKAL03Ki5izpPEiIROLsaYYD0t4r0w7JaBYc67BGrMdwDlmTT-ZrezryGl82I9lG-L4ibTRvA_ue_BzZC68F9UEmuhnW4cyKyy-RQ00jrjqasIXw8MklKr2ec&sa=X&sqi=2&ved=2ahUKEwjj2r-T7LuLAxVKcfEDHb3vH64QtKgLegQIDhAB&biw=1920&bih=945&dpr=1">
            Это ты
          </a>
        </div>
      )}
      <div className={showModalImg}></div>
      <img className="main_img" src={"img/" + randNum + ".jpg"} alt="" />
      <div onClick={() => click()} className="main_button">
        <h2>
          {money}
          {showModalNew && "м"}
        </h2>
      </div>
      {showModalNew || (
        <div>
          <div className="update">
            {showModal1 || (
              <div
                onClick={() => buy(100, 2, setShowModal1, 5)}
                className="update_block"
              >
                <h6>х2</h6>
                <h5>100</h5>
              </div>
            )}

            {showModal2 || (
              <div
                onClick={() => buy(200, 5, setShowModal2, 0)}
                className="update_block"
              >
                <h6>х5</h6>
                <h5>200</h5>
              </div>
            )}
            {showModal3 || (
              <div
                onClick={() => buy(1000, 10, setShowModal3, 15)}
                className="update_block"
              >
                <h6>х10</h6>
                <h5>1к</h5>
              </div>
            )}
          </div>
          <div className="update">
            {showModal4 || (
              <div
                onClick={() => buy(10000, 20, setShowModal4, 20)}
                className="update_block"
              >
                <h6>х20</h6>
                <h5>10к</h5>
              </div>
            )}

            {showModal5 || (
              <div
                onClick={() => buy(200000, 50, setShowModal5, 25)}
                className="update_block"
              >
                <h6>х50</h6>
                <h5>200к</h5>
              </div>
            )}
            <div
              onClick={() => {
                buy(10000000, 0.00001, setShowModalNew, 10);
                if (money >= 10000000) {
                  setMoney(0);
                }
              }}
              className="update_block"
            >
              <h6>???</h6>
              <h5>10м</h5>
            </div>
          </div>
        </div>
      )}
      {showModalNew && (
        <div>
          <div className="update">
            {showModal1 && (
              <div
                onClick={() => buy(200, 2, setShowModal1, 5, 25)}
                className="update_block"
              >
                <h6>х2</h6>
                <h5>200м</h5>
              </div>
            )}

            {showModal2 && (
              <div
                onClick={() => buy(500, 2, setShowModal2, 0, 35)}
                className="update_block"
              >
                <h6>х2</h6>
                <h5>500м</h5>
              </div>
            )}
            {showModal3 && (
              <div
                onClick={() => buy(1000, 2.5, setShowModal3, 15, 40)}
                className="update_block"
              >
                <h6>х2.5</h6>
                <h5>1млд</h5>
              </div>
            )}
          </div>
          <div className="update">
            {showModal4 && (
              <div
                onClick={() => buy(10000, 5, setShowModal4, 20, 150)}
                className="update_block"
              >
                <h6>х5</h6>
                <h5>10млд</h5>
              </div>
            )}

            {showModal5 && (
              <div
                onClick={() => buy(100000, 10, setShowModal5, 25, 250)}
                className="update_block"
              >
                <h6>х10</h6>
                <h5>100млд</h5>
              </div>
            )}
            <div
              onClick={() => buy(1000000, 0.000001, setShowModalEnd)}
              className="update_block"
            >
              <h6>???</h6>
              <h5>1000млд</h5>
            </div>
          </div>
          <div className="gif">
            <p>+{moneyPass} за картинку</p>
            {(showModal3 && <img src="catgirl1.gif" alt="Oh no..." />) || (
              <img src="catgirl2.gif" alt="Oh no..." />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
