import styled from "styled-components";

export const PhotoContainer = styled.div`
 height: 800px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const PhotoWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const PhotoCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const PhotoIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 5px;
  border-radius: 10px;
`

export const PhotoH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const PhotoH2 = styled.h2`
  font-size: 0.7rem;
  margin: 5px;
`

export const PhotoP = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 54px;
`