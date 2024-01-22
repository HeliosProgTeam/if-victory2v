import React from "react";
import Divider from "../../components/divider/Divider";
import Activity from "../../components/Activity/Activity";

import PeaceImg from "../../../public/images/peace.svg";
import MedicineImg from "../../../public/images/medicine.svg";
import ProductsImg from "../../../public/images/products.svg";

const data = [
  {
    src: PeaceImg,
    alt: 'peace',
    title: 'Забезпечення потреб захисників України',
  }, 
  {
    src: ProductsImg,
    alt: 'products',
    title: 'Гуманітарна допомога',
  },
  {
    src: MedicineImg,
    alt: 'medicine',
    title: 'Медичне забезпечення',
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
