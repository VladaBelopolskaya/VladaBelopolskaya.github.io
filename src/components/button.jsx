import React from 'react';
import styled from 'styled-components';

const Butt = styled.button`
  outline: none;
  cursor: pointer;
  margin: ${props => props.logout ? '40px auto 0 auto' : '16px auto 0 auto'};
  padding: 18px 0 16px 0;
  width: ${props => props.logout ? '154px' : '145px'};
  background-color: #ed4159;
  border-radius: 100px;
  border: none;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  -webkit-box-shadow: 0 4px 16px 0px rgba(237, 65, 89, 0.4);
  box-shadow: 0 4px 16px 0px rgba(237, 65, 89, 0.4);

  @media (min-width: 660px) {
    margin: 18px auto 0 auto;
  }

  &:hover,
  &:focus {
  background-color: #ffffff;
  -webkit-box-shadow: 0 6px 20px 0px rgba(237, 65, 89, 0.4);
  box-shadow: 0 6px 20px 0px rgba(237, 65, 89, 0.4);
  color: #ed4159;
  }

  &:active {
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 10px 0px rgba(237, 65, 89, 0.4);
  box-shadow: 0 2px 10px 0px rgba(237, 65, 89, 0.4);
  color: #ed4159;
  }
`;

function Button(props) {
  return (
    <Butt id={props.id} type="submit">
      {props.children}
    </Butt>
  );
}

export default Button;
