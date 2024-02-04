import styled from 'styled-components';

export const H1 = styled.h1``;

export const H2 = styled.h2`
  padding: 14px;
  background-color: #f7f7fb;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const DataImg = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 600px;
  margin: auto;
  height: 100%;

  color: #ffffff;
`;

export const TitleWrap = styled.div`
  margin: 0 auto 24px;
  width: 1184px;
  height: 500px;
  background-image: url(https://bmwlviv.com/storage/units/big/p90295453-highres.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Section = styled.section`
  margin-bottom: 24px;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;

  & > li {
    padding: 10px;
    background-color: #f7f7fb;
    border-radius: 15px;
  }
`;
