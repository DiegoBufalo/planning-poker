import styled from "styled-components";



export const StyledInput = styled.input`
    width: 610px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #a8aeb2;
    padding-left: 30px;

    &.adptative {
        width: 100%;
    }

    :focus-visible {
        border: 2px solid #3993ff;
        outline: none;
    }

`