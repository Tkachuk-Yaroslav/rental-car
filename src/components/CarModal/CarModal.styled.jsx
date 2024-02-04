import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
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
  font-size: 18px;
  line-height: 133%;
  color: #121417;

  overflow: hidden;
  height: 24px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export const Year = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  font-family: 'ManropeRegular';
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  gap: 4px;
  width: 350px;
  height: 40px;
  overflow: hidden;
`;

export const Item = styled.li`
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);

  &:not(:first-child)::before {
    content: '|';
    margin-right: 6px;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
  height: 40px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Text = styled.div`
  font-family: 'ManropeMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Accessories = styled.ul`
  font-family: 'ManropeRegular';
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  gap: 4px;
  width: 460px;
  overflow: hidden;
`;

export const Functionalities = styled.ul`
  font-family: 'ManropeRegular';
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
  font-family: 'MontserratRegular';
  color: #363535;

  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  padding: 7px 14px;

  border-radius: 35px;
  background: #f9f9f9;
`;

export const ConditionsSpan = styled.span`
  font-family: 'MontserratSemiBold';
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
