import React from "react";
import Divider from "../../components/divider/Divider";
import Activity from "../../components/Activity/Activity";

import PeaceImg from "../../../public/images/peace.png";
import MedicineImg from "../../../public/images/medicine.png";
import ProductsImg from "../../../public/images/products.png";

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
