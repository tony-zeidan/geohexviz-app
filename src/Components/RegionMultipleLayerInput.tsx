import { useState } from "react";
import {
  LayerMultipleInputPropType,
  RegionLayerPropType,
} from "./utils/types.ts";
import { RegionLayerInput } from "./RegionLayerInput";

export const RegionMultipleLayerInput = (props: LayerMultipleInputPropType) => {
  const [rollers, setRollers] = useState<Array<RegionLayerPropType>>([]);
  const [activeTab, setActiveTab] = useState(1);

  //TODO: convert tabulation into a custom component for other layer types
  //TODO: change tabulation style - also when the first tab is created, it should be opened by default

  const addHandler = () => {
    if (rollers.length === props.maxLimit) return;

    setRollers([...rollers, { id: rollers.length + 1 }]);
  };

  const removeHandler = () => {
    if (rollers.length === 0) return;

    const newRollers = [...rollers];
    newRollers.pop();
    setRollers(newRollers);
  };

  return (
    <div>
      {
        <ul className="nav nav-tabs mb-3" id="regionlayer-tabs" role="tablist">
          {rollers.map((roller, index) => {
            return (
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id={`regionlayer-tab-${roller.id}`}
                  data-mdb-toggle="tab"
                  href={`#regionlayer-tab-${roller.id}`}
                  role="tab"
                  aria-controls={`regionlayer-tab-${roller.id}`}
                  aria-selected="true"
                  onClick={() => setActiveTab(index)}
                >
                  {`Layer: ${roller.id}`}
                </a>
              </li>
            );
          })}
        </ul>
      }
      {
        <div className="tab-content" id="regionlayer-tabs">
          {rollers.map((roller, index) => {
            return (
              <div
                className={`tab-pane fade${
                  index === activeTab ? " show active" : ""
                }`}
                key={index}
                id={`regionlayer-tab-${roller.id}`}
                role="tabpanel"
                aria-labelledby={`regionlayer-tab-${roller.id}`}
              >
                <RegionLayerInput id={roller.id} />
              </div>
            );
          })}
        </div>
      }

      <div className="btn-group" role="group" aria-label="addRemoveButtonGroup">
        <button type="button" className="btn btn-light" onClick={addHandler}>
          Add
        </button>
        <button type="button" className="btn btn-light" onClick={removeHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};
