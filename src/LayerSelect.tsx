export type LayerSelectType = {
  layerName: string;
};

type Props = {
  layerName: string;
};

/*
The layer select component should allow a user to select from a list of countries, or input their own CSV file.
Perhaps it should even allow them to input latitudes and longitudes in tabular format.
 */

export const LayerSelect = ({ layerName }: Props) => {
  return (
    <div>
      <h2>{layerName}</h2>
    </div>
  );
};
