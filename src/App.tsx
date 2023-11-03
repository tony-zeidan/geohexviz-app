import "./App.css";
import { HexbinLayerInput } from "./Components/HexbinLayerInput";
import { RegionLayerInput } from "./Components/RegionLayerInput";
import { ScatterLayerInput } from "./Components/ScatterLayerInput";
import { GridLayerInput } from "./Components/GridLayerInput";

function App() {
  /*
    The hexbin layer should be different from all others.
        - there can only be one
        - it is mandatory no matter what
     */

  return (
    <>
      <div className="accordion tw-w-[700px]" id="layerInputAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHexbinLayerInput"
              aria-expanded="true"
              aria-controls="collapseHexbinLayerInput"
            >
              Hexbin Layer
            </button>
          </h2>
          <div
            id="collapseHexbinLayerInput"
            className="accordion-collapse collapse show"
            aria-labelledby="hexbinLayerInputHeading"
            data-bs-parent="#layerInputAccordion"
          >
            <div className="accordion-body">
              <HexbinLayerInput />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="regionLayerAccordionHeader">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseRegionLayerInput"
              aria-expanded="false"
              aria-controls="collapseRegionLayerInput"
            >
              Region Layers
            </button>
          </h2>
          <div
            id="collapseRegionLayerInput"
            className="accordion-collapse collapse show"
            aria-labelledby="regionLayerInputHeading"
            data-bs-parent="#layerInputAccordion"
          >
            <div className="accordion-body">
              <RegionLayerInput />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="outlineLayerAccordionHeader">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOutlineLayerInput"
              aria-expanded="false"
              aria-controls="collapseOutlineLayerInput"
            >
              Outline Layers
            </button>
          </h2>
          <div
            id="collapseOutlineLayerInput"
            className="accordion-collapse collapse show"
            aria-labelledby="outlineLayerInputHeading"
            data-bs-parent="#layerInputAccordion"
          >
            <div className="accordion-body">
              <RegionLayerInput />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="gridLayerAccordionHeader">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGridLayerInput"
              aria-expanded="false"
              aria-controls="collapseGridLayerInput"
            >
              Empty Grid Layers
            </button>
          </h2>
          <div
            id="collapseGridLayerInput"
            className="accordion-collapse collapse show"
            aria-labelledby="gridLayerInputHeading"
            data-bs-parent="#layerInputAccordion"
          >
            <div className="accordion-body">
              <GridLayerInput />
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="outlineLayerAccordionHeader">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseScatterLayerInput"
              aria-expanded="false"
              aria-controls="collapseScatterLayerInput"
            >
              Scatter Data Layers
            </button>
          </h2>
          <div
            id="collapseScatterLayerInput"
            className="accordion-collapse collapse show"
            aria-labelledby="scatterLayerInputHeading"
            data-bs-parent="#layerInputAccordion"
          >
            <div className="accordion-body">
              <ScatterLayerInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
