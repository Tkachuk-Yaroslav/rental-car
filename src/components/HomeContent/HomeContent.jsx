import React from 'react';

const HomeContent = () => {
  return (
    <main>
      <div>
        <h1>Оренда автомобілів в Україні</h1>
        <nav>
          <ul>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#contact">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>

      <section id="services">
        <h2>Наші послуги</h2>
        <p>
          Ми надаємо широкий вибір автомобілів для оренди в різних містах
          України. Ви можете обрати автомобіль на будь-який смак і за доступними
          цінами.
        </p>
      </section>

      <section id="about">
        <h2>Про нас</h2>
        <p>
          Ми - компанія, що спеціалізується на наданні послуг оренди автомобілів
          в Україні. Наша мета - зробити вашу поїздку максимально зручною і
          комфортною.
        </p>
      </section>

      <section id="contact">
        <h2>Контакти</h2>
        <p>Зв'яжіться з нами за наступними контактними даними:</p>
        <ul>
          <li>Телефон: +380123456789</li>
          <li>Email: info@carrental.com</li>
          <li>Адреса: вул. Прикладна, 123, м. Київ</li>
        </ul>
      </section>

      <div>
        <p>&copy; 2024 Оренда автомобілів в Україні</p>
      </div>
    </main>
  );
};

export default HomeContent;
