import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
    height: 100px;

    div.logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #3993ff;

        > svg {
            height: 30px;
            width: 30px;
        }

        &:after {
            content: 'Bufalo Poker';
            font-size: 25px;
            font-weight: 900;
            
            margin: 3px 0px;
            border-bottom: 2px solid #1a2935;
        }
    } 

    div.group-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        height: 48px;
        border: none;

        span {
            font-size: 18px;
            font-weight: 800;
        }

        :hover {
            cursor: pointer;
        }
    }

    button.action-button {
        background: #3993ff;
        color: #fff;
        border-radius: 8px;
    }

    button.entrar {
        color: #3993ff;
        background: transparent;
        margin-right: 20px;
    }

    button.menu {
        color: #3993ff;
        background: transparent;
        margin-right: 20px;
 
        
    }

    div.drop-down {
        display: none;

        &.show {
            display: flex;
            position: absolute;
            top: 100px;
            right: 0;
            width: 100%;
            justify-content: end;
        }
    }
`