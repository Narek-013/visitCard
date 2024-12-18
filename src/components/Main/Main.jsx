import AddToContacts from "../AddContacts/AddContacts";
import { socialArr } from "./HardCode";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container container">
        <h1>Narek Meliksetyan</h1>
        <div className="main__social">
            <AddToContacts/>
            {
                socialArr.map((el,idx) => {
                    return (
                      <a key={idx} href={el.link} target="_blank">
                        <img src={el.img} alt={`${el.name} icon`} />
                      </a>
                    );
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Main;
