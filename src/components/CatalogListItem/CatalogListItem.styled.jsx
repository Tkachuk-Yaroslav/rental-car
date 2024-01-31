import styled from 'styled-components';
export const CardWrap = styled.div`
  width: 274px;
  position: relative;
`;

export const Img = styled.img``;

export const ImgWrapper = styled.div`
  width: 274px;
  height: 268px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center; /* Розміщення зображення по центру */
  background-size: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
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

export const BtnMore = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
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

export const SvgHeart = styled.svg`
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
