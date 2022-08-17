import React from "react";
import MainImg from "./main-img.svg";

export const MainSection = ({ ...props }) => {
  return (
    <section className={"home"}>
      <div className="home__bg">
        <div className="home__content">
          <h1 className="home__title">Благодiйний фонд IФ-ВIКТОРI</h1>
          <h3 className="home__subtitle">Фонд створено з метою:</h3>
          <p className="home__desc">
            Створення простору для розвитку та пiдтримки аграрної сфери,як на
            територiї регiону, так i країни Здiйснення благодiйої дiяльностi в
            iнтересах громадян i суспiльства Фiнансування проектiв, створення
            нових i пiдтримку iснуючих проектiв у сферах пiдстримки осiб, що
            постраждали внаслiдок катастроф, збройних конфлiктiв i нещасних
            випадкiв, а також бiженцям та особам,якi перебувають у складних
            життевих обставинах. Детальнiше у вкладцi "Про нас".
          </p>
        </div>
        <div className="home__img home__img--primary">
          <MainImg />
        </div>
        <div className="home__img home__img--secondary">
          <MainImg />
        </div>
        <div className="home__img home__img--three">
          <MainImg />
        </div>
      </div>
    </section>
    // <section className="home" {...props}>
    //   <div className="home__info">
    //     <h1 className="home__title">Благодiйний фонд IФ-ВIКТОРI</h1>
    //     <h3 className="home__subtitle">Фонд створено з метою:</h3>
    //     <p className="home__desc">
    //       Створення простору для розвитку та пiдтримки аграрної сфери,як на
    //       територiї регiону, так i країни Здiйснення благодiйої дiяльностi в
    //       iнтересах громадян i суспiльства Фiнансування проектiв, створення
    //       нових i пiдтримку iснуючих проектiв у сферах пiдстримки осiб, що
    //       постраждали внаслiдок катастроф, збройних конфлiктiв i нещасних
    //       випадкiв, а також бiженцям та особам,якi перебувають у складних
    //       життевих обставинах. Детальнiше у вкладцi "Про нас".
    //     </p>
    //   </div>
    //   <div className="home__img">
    //     <MainImg />
    //   </div>
    // </section>
  );
};
