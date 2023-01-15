import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 100px);
    color: #1a2935;

    h2,h3 {
        display: flex;
        align-items: center;
        margin: 0;
        margin-bottom: 20px;
    }

     
     select {
        width: 650px;
        height: 50px;
        border-radius: 8px;
        border: 2px solid #a8aeb2;
        padding-left: 30px;
        margin-top: 25px;

        :focus-visible {
            border: 2px solid #3993ff;
            outline: none;
        }
    
    } 

     button {
        width: 650px;
        height: 50px;
        border-radius: 8px;
        border: 0;
        background-color: #3993ff;
        margin-top: 40px;
        color: #fff;

        > span {
            font-size: 18px;
            font-weight: 800;
        }
    }
`;