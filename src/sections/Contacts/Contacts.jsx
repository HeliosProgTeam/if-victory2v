import React from "react";
import Divider from "../../components/divider/Divider";
import Img from "../../components/Image";
import SecImage from "./second.png";
import FirImage from "./first.jpg";

const Contacts = () => {
  return (
    <section className={"contacts"}>
      <div className="contacts__row">
        <div className="contacts__img contacts__img--left">
          {/*<div className="contacts__img-inner">*/}
          <Img src={FirImage} alt="first item" />
          {/*</div>*/}
        </div>
        <p className="contacts__text">
          Для аграрного сектору вкрай важливе забезпечення як добривами, так і
          паливом, оскільки на сьогоднішній день ціна на паливо зросла в півтора
          рази відносно того року, і якщо для закупівлі добрив підприємства не
          мають грошових коштів через вищеперелічені негативні фактори, які
          зумовлені воєнною агресією країною-терористом – подальше
          функціонування таких підпрємств під загрозою.
        </p>
      </div>
      <Divider />
      <div className="contacts__row">
        <p className="contacts__text">
          З метою реалізації своїх цілей фонд співпрацює з двома виробниками:
          виробник мікродобрив – ТзОВ «Екохім-іф», та виробник пального та
          паливних матеріалів – ПП«Прикарпаткомплект». Вищевказані виробники – є
          національними виробниками, тобто підтримують економіку Держави у
          складний період.
        </p>
        <div className="contacts__img contacts__img--right">
          {/*<div className="contacts__inner-img">*/}
          <Img src={SecImage} alt="second item" />
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
