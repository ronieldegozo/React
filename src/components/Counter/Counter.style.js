import styled from 'styled-components';
export const CounterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    padding: 20px;
    margin: 10px;
    font-size: 1.5em;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    
`;  