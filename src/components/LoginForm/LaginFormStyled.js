import styled from 'styled-components';

export const LoginContainer = styled('div')`
  width: 250px;
  display: flex;
  flex-direction: column;
`;
export const StyledLoginForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const StyledLoginFormLabel = styled('label')`
  color: #6199c2;
  padding-bottom: 10px;
`;
export const StyledLoginFormIput = styled('input')`
  display: block;
  width: 300px;
  border: 1px solid #7aa7c7;
  box-shadow: 0px 0px 28px -12px #52b6ff;
  border-radius: 5px;
  padding: 5px;
  background-color: #f0f7fc;
  box-shadow: rgba(12, 47, 89, 0.1) 1px 1px 3px 0 inset;
  outline: none;
  &::placeholder {
    color: #6c92ad;
  }
  &:focus {
    border-color: #153f70;
  }
  &:hover {
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;
export const StyledLoginButton = styled('button')`
  margin-top: 20px;
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    transition: all 0.4s ease-in-out;
  }
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
