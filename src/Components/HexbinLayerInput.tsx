import { BinningFunctionOpts } from "./utils/constants";
import { InputGroup, Select, Range } from "./ui-components";

export const HexbinLayerInput = () => {
  return (
    <div>
      <InputGroup label="Latitude Column" />

      <InputGroup label="Longitude Column" />

      <InputGroup label="Binning Column" />

      <Select
        options={BinningFunctionOpts}
        defaultToFirst
        label="Binning Function"
      />

      <Range label="Hexagonal Resolution (0-15)" min="0" max="15" step="1" />
    </div>
  );
};
