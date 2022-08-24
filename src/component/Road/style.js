import styled from "styled-components";

export const RoadContainer = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
`

export const Process = styled.div`
    width: ${({per}) => per}%;
    height: 50px;
    position: relative;
    >img{
        position: absolute;
        right: 0;
        width: 100px;
        transform: rotateY(180deg);
    }
`

export const Finish = styled.div`
`