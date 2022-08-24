import { memo } from "react";
import raceCar from "./car.png"
import { RoadContainer, Process, Finish } from "./style";

const Road = ({perValue}) => {
    console.log("Road");
    return (
        <RoadContainer>
            <Process per={perValue}>
                <img src={raceCar} alt="raceCar"/>
            </Process>
            <Finish>
                <span>|Finish</span>
            </Finish>
        </RoadContainer>
    )
}

export default memo(Road);