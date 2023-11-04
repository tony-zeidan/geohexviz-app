import { BinningFunctionOpts } from "./utils/constants";
import { InputGroup } from "./ui-components/InputGroup";
import { Select } from "./ui-components/Select";
import { Range } from "./ui-components/Range";

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
