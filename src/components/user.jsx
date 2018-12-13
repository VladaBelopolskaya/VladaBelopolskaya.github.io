import React from 'react';
import Button from './button.jsx';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 64px;
  width: 86px;
  height: 86px;

  @media (min-width: 660px) {
    width: 128px;
    height: 128px;
  }
`;

const Form = styled.form`
  width: 154px;
  margin: 0 auto;
`;

const P = styled.p`
  padding: 0;
  text-align: center;
  font-weight: 700;
  margin: 24px 0 0 0;
  font-size: 18px;
  line-height: 18px;

  @media (min-width: 660px) {
    margin: 45px 0 8px 0;
    font-size: 28px;
    line-height: 28px;
  }
`;

function User(props) {
  return (
    <div>
      <Img id="img" alt="avatar" src={props.photo} />
      <P id="user">
        {props.userName}
      </P>
      <Form
        id="form-logout"
        onSubmit={props.logOut}
      >
        <Button logout id="login">
          Logout
        </Button>
      </Form>
    </div>
  );
}

export default User;
