import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-width: 200px;
    height: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 8px 8px 8px hsl(204deg 6% 68% / 40%);
    margin-right: 280px;
    
    .actions {
        padding: 10px;
    }

    .logout {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        cursor: pointer;
        
        > span {
            font-size: 18px;
            font-weight: 600;
            color: #1a2935;
        }

        > svg {
            color: #1a2935;
            width: 30px;
            height: 30px;
        }
    }
`