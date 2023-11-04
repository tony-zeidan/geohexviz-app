export type Map<V> = { [K in string | number]: V };

export type Nullable<T> = T | null;

export type LayerMultipleInputPropType = {
    maxLimit: number;
};

export type RegionLayerPropType = {
    id: number
};