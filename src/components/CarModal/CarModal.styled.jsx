import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* сірий оверлей */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalContent = styled.div`
  position: relative; /* Додано */
  background-color: #fff; /* колір фону модального вікна */
  padding: 40px;
  border-radius: 24px;
  width: 541px;
  min-height: 700px;
  max-height: 752px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const Img = styled.img`
  width: 460px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #121417;

  /* font-family: Manrope; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  overflow: hidden;
  height: 24px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export const Year = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  gap: 4px;
  width: 270px;
  height: 40px;
  overflow: hidden;
`;

export const Item = styled.li`
  font-size: 12px;
  /* padding-left: 6px;
  padding-right: 6px; */
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const Description = styled.p`
  color: #121417;

  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
  height: 40px;
`;

export const Text = styled.div`
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Accessories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  gap: 4px;
  width: 460px;
  overflow: hidden;
`;

export const Functionalities = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  gap: 4px;
  width: 460px;
  overflow: hidden;
`;

export const ConditionsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionsItem = styled.p`
  color: #363535;

  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  padding: 7px 14px;

  border-radius: 35px;
  background: #f9f9f9;
`;

export const ConditionsSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const RentalLink = styled.a`
  padding: 12px 50px;

  border-radius: 12px;
  background: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;