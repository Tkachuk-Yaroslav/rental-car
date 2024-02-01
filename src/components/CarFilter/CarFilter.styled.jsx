import styled from 'styled-components';

export const SelectCarWrapper = styled.div`
  width: 224px;
  height: 74px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;

  padding: 14px 18px;
  margin-top: 8px;

  option {
    max-height: 200px;
    overflow-y: auto;
  }
`;

export const PriceSelect = styled.select`
  width: 100%;

  height: 48px;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;

  padding: 14px 18px;
  margin-top: 8px;
`;
//125 48
export const SelectPriceWrapper = styled.div`
  width: 125px;
  height: 74px;
`;

export const InputMillageWrapper = styled.div`
  width: 320px;
  height: 74px;
`;

export const InputMillage = styled.input`
  width: 160px;
  padding: 14px 24px;

  background: #f7f7fb;
  border: transparent;
`;

export const DivMillage = styled.div`
  margin-top: 8px;
`;

export const Btn = styled.button`
  color: #ffffff;
  /* font-family: Manrope; */
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  padding: 14px 44px;
  width: 136px;
  height: 48px;

  border-radius: 12px;
  background: #3470ff;
`;

export const CarForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  width: 859px;
  height: 74px;

  margin: 0 auto 50px;
`;
