import React from "react";
import Divider from "../../components/divider/Divider";
import PlaceholderImg from "../../../public/images/placeholder.svg";
import Activity from "../../components/Activity/Activity";

const data = [{
    src: PlaceholderImg,
    alt: 'placeholder',
    title: 'Some text',
}];

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
