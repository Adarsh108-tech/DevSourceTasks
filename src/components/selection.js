import Web from "./Web";
import Android from "./Android";
import Game from "./Game";

function Selection({selected}) {
    if(selected === 0){
        return(
            <Web/>
        )
    }
    if(selected === 1){
        return(
            <Android/>
        )
    }
    if(selected === 2){
        return(
            <Game/>
        )
    }
}

export default Selection;