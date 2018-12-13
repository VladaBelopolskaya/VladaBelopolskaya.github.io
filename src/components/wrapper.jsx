import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  margin: 43px auto 37px auto;
  width: 182px;
  height: 40px;

  @media (min-width: 660px) {
    width: 315px;
    height: 69px;
    margin: 141px auto 125px auto;
  }
`;

const Section = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 288px;
  margin: 0 auto;
  padding: 34px 24px 48px 24px;
  background-color: #ffffff;
  border-radius: 8px;
  -webkit-box-shadow: 0 2px 16px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 16px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: 660px) {
    width: 600px;
    padding: 52px 48px 60px 48px;
  }
`;

function Wrapper(props) {
  return (
    <div>
      <Img alt="logo" src="assets/img/logo.svg" />
      <Section>{props.children}</Section>
    </div>
  );
}

export default Wrapper;
