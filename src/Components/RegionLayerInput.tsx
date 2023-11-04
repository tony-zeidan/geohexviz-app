import { InputGroup } from "./ui-components";
import { RegionLayerPropType } from "./utils/types.ts";

export const RegionLayerInput = (props: RegionLayerPropType) => {
  return (
    <div>
      <InputGroup label="Layer Id" placeholder={String(props.id)} />

      <InputGroup label="Region Name" />

      <InputGroup label="Latitude Column" />

      <InputGroup label="Longitude Column" />
    </div>
  );
};
