import React from "react";
import Divider from "../../components/divider/Divider";
import PlaceholderImg from "../../../public/images/placeholder.svg";
import ShieldImg from "../../../public/images/shield.svg";
import Activity from "../../components/Activity/Activity";

const data = [
  {
    src: ShieldImg,
    alt: 'placeholder',
    title: 'Забезпечення потреб захисників України',
  }
];

const Activities = () => {
  return (
    <section className="activities">
        <h2 className={"activities__title"}>Напрямки діяльності нашого фонду</h2>
        <Divider />
        <div className="activities-container">
          {data.map((val, idx, arr) => {
              return (
                  <Activity key={idx} {...val}/>
              )
          })}
        </div>
    </section>
  )
};

export default Activities;
