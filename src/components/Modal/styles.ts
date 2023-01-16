import styled from "styled-components";





export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(26,41,53,.8);
    z-index: 10;
    position: fixed;
    top: 0%;
    
    div.modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 180px;
        width: 300px;
        background-color: #fff;
        border-radius: 16px;
        padding: 20px;
    }

    div.title {
        font-size: 1.6rem;
        font-weight: 700;
        color: #1a2935;
    }

    div.content {
        width: 100%;
        height: 100%;
    }
`