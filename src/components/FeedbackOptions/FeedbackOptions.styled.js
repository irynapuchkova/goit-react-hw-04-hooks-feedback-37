import styled from '@emotion/styled';

export const ButtonSet = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  height: 50px;
  width: 100px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: 600;
  background: #188d8d;
  color: #fff;
  border-bottom: 2px solid #30c29e;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  cursor: pointer;
  
  &:hover {
    background: #2ebc99;
`;
