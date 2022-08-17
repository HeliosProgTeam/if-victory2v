import React from 'react'
import MainImg from './main-img.svg'

export const MainSection = ({...props}) => {
    return <section className="main" {...props}>
        <div className="main-info">
            <h1 className="h1">Благодiйний фонд IФ-ВIКТОРI</h1>
            <h3 className="h3">Фонд створено з метою:</h3>
            <p className="main-content">
                Створення простору для розвитку та пiдтримки аграрної сфери,як на територiї регiону, так i країни Здiйснення благодiйої дiяльностi в iнтересах громадян i суспiльства Фiнансування проектiв, створення нових i пiдтримку iснуючих проектiв у сферах пiдстримки осiб, що постраждали внаслiдок катастроф, збройних конфлiктiв i нещасних випадкiв, а також бiженцям та особам,якi перебувають у складних життевих обставинах. Детальнiше у вкладцi "Про нас".
            </p>
        </div>
        <div className="main-img-wrap">
            <MainImg className="main-img"/>
        </div>
    </section>;
};
