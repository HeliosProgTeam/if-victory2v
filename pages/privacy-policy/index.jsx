import React from "react";
import { withLayout } from "../../src/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <h1 className="privacy-policy-page__title">Політика конфіденційності</h1>
      <h2 className="privacy-policy-page__subtitle">
        Останнє оновлення: 11.09.2023
      </h2>
      <p>
        Ласкаво просимо на сайт благодійної організації ПрикарпатГарант. Ми
        цінуємо ваш інтерес до нашої роботи і хочемо запевнити вас у тому, що ми
        не збираємо і не використовуємо ваші особисті дані.
      </p>
      <p>
        Ми не запитуємо і не збираємо жодної інформації про відвідувачів нашого
        сайту. Ми не використовуємо файли cookie або інші механізми
        відстеження.
      </p>
      <p>
        Уся інформація на нашому сайті надається виключно з інформаційною метою,
        щоб дати вам уявлення про нашу діяльність і цілі.
      </p>
      <p>
        Якщо у вас є які-небудь питання або потрібна додаткова інформація, будь
        ласка, зв&apos;яжіться з нами:
      </p>
      <p>
        <a
          className="privacy-policy-page__contact"
          href="mailto:prykarpatgarant@gmail.com"
        >
          prykarpatgarant@gmail.com
        </a>
      </p>
      <h2 className="privacy-policy-page__subtitle">
        Зміни в політиці конфіденційності
      </h2>
      <p>
        Ми можемо час від часу оновлювати нашу політику конфіденційності. Усі
        зміни будуть опубліковані на цій сторінці, включно з датою останнього оновлення.
      </p>
    </div>
  );
};

export default withLayout(PrivacyPolicyPage);
