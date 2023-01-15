import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  flex-direction: column;
`;

export const ModalContent = styled.div`
    margin-top: 50px;
    width: 100%;

    div.spec-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    width: 100%;
  }

  input.input-name {
      width: 100%;
      height: 50px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 53px;
    height: 25px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    :before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  span.spec {
    font-size: 1.1rem;
    color: #48545d;
    margin-left: 15px;
  }

  button.start-game {
    margin-top: 30px;
    width: 106%;
    height: 50px;
    border: none;
    background-color: #3993ff;
    border-radius: 8px;
    
    > span {
      color: #fff;
      font-size: 18px;
      font-weight: 800;
    }
  }
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-rows: 175px 200px 175px;
  grid-template-columns: 120px 460px 120px;
  margin: 90px 0;
`

export const Table = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d7e9ff;
  border-radius: 16px;
  width: 460px;
  height: 180px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

export const LeftSideTable = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const RightSideTable = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const BottomSideTable = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-top: -65px;
`

export const TopSideTable = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`

export const UserCard = styled.div<{ userName: string }>`
  width: 40px;
  height: 70px;
  background-color: lightgray;
  border-radius: 8px;

  &:after  {
    content: '${props => props.userName}';
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a2935;
    position: relative;
    top: 75px;
    display: block;
    width: 100px;
    height: 50px;
    left: -30px;
    text-align: center;
    overflow: hidden;
  }
`


export const OptionsCards = styled.div`
  display: flex;
  bottom: 15px;
  width: 770px;
  height: 120px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`

export const Card = styled.button<{ value: string }>`
  width: 50px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid #3993ff;
  color: #3993ff;
  background-color: #fff;
  border: 2px solid #3993ff;
  cursor: pointer;
  outline: 0;
  transition: all .09s linear;

  &.selected {
    background: #3993ff;
    border-color: transparent;
    color: #fff;
    margin-top: -.8rem;

    :hover {
      background-color: #3993ff;
      margin-top: -.8rem;
    }
  }

  :hover {
    background-color: #ebf4ff;
    margin-top: -.25rem;
  }

  &:after  {
    content: '${props => props.value}';
    font-weight: 700;
    font-size: 1.2rem;
  }
`