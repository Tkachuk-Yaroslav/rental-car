import React from 'react';
import {
  DataImg,
  H1,
  H2,
  Section,
  SocialList,
  TitleWrap,
} from './HomeContent.styled';
import { RentalLink } from 'components/CarModal/CarModal.styled';

const HomeContent = () => {
  return (
    <main>
      <TitleWrap>
        <DataImg>
          <H1>Car rental in Ukraine №1</H1>
          <RentalLink href="tel:+380730000000" type="button">
            Rental car
          </RentalLink>
        </DataImg>
      </TitleWrap>

      <Section id="services">
        <H2 style={{ width: '158px' }}>Our services</H2>
        <p>
          In this section, we present a wide range of services provided by our
          company. Each customer can find a car according to his needs and
          ideas. We offer a large selection of cars for rent in different cities
          of Ukraine with different characteristics and prices.
        </p>
      </Section>

      <Section id="about">
        <H2 style={{ width: '122px' }}>About us</H2>
        <p>
          In this section we talk about our company and our goals. We are a
          company that specializes in providing car rental services in Ukraine.
          Our goal is to make your trip as convenient and comfortable as
          possible, giving you access to the best cars with favorable rental
          conditions.
        </p>
      </Section>

      <Section id="contact">
        <H2 style={{ width: '122px' }}>Contacts</H2>
        <p style={{ marginBottom: '8px' }}>
          In this section, we provide contact information for contacting our
          company. You can contact us using the following contact details:
        </p>
        <SocialList>
          <li>
            Phone: <a href="tel:+380730000000">+380730000000</a>
          </li>
          <li>
            Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
          </li>
          <li>Address: вул. Прикладна, 123, м. Київ</li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </SocialList>
        <p>
          We are ready to answer all your questions and help you organize the
          best car trip in Ukraine.
        </p>
      </Section>
    </main>
  );
};

export default HomeContent;
