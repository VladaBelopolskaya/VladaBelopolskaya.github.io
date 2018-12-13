import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: 16px 0 14px 16px;
  outline: none;
  background-color: #f1f1f1;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  width: 100%;

  @media (min-width: 660px) {
    margin-bottom: 32px;
  }

  &:focus {
    border: 1px solid rgba(151, 151, 151, 0.25);
  }
`;


function Input(props) {
  return (
    <div>
      <InputField
        {...props}
      />
    </div>
  );
}

export default Input;
