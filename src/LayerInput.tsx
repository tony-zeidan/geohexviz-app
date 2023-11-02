
import {useState} from 'react';

import {LayerSelectType, LayerSelect} from "./LayerSelect";

type LayerInputType = {
    minLimit: number;
    maxLimit: number;
    required: boolean;
    layerName: string;
}

/*
This component is supposed to let the user input the properties they want for a given layer.
They should be able to define a country name, or upload a CSV file.
These should be separate subcomponents.
 */

export const LayerInput = (props: LayerInputType) => {

    const [rollers, setRollers] = useState<Array<LayerSelectType>>([]);

    const addHandler = () => {
        if (rollers.length === props.maxLimit)
            return;

        setRollers([...rollers, { layerName: `${props.layerName}:${rollers.length+1}` }]);
    }

    const removeHandler = () => {
        if (rollers.length === props.minLimit)
            return

        const newRollers = [...rollers];
        newRollers.pop();
        setRollers(newRollers);
    }

    return (
        <div>
            <h1>{props.layerName}</h1>
            { rollers.map(rollerType => {
                return (<LayerSelect layerName={rollerType.layerName}></LayerSelect>);
            }) }
            <button onClick={addHandler}>+</button>
            <button onClick={removeHandler}>-</button>
        </div>
    )
}

