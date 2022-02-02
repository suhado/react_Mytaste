import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const DeveloperWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;


export const Icon = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 24px;
  font-weight: bold;
  text-decoration: none;
  
`;

export const DeveloperInfo = styled.div`
  background: #010101;
  height: 500px;
  width: 600px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px 32px;
  line-height: 3rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Img= styled.img`
  border-radius: 80px;
  width: 130px;
  margin: 1rem;
`

export const Name = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1.4rem;
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30px;
`

export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
`

export const ContactWrap = styled.div`
  color: #fff;
  margin-top: 15px;
`

export const Phone = styled.div`
  display: flex;
`
export const Email = styled.div`
  display: flex;
`