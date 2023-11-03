import {RegionLayerPropType} from "../Types/LayerTypes";


export const RegionLayerInput = (props: RegionLayerPropType) => {

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder={props.id} />
                <label htmlFor="floatingInput">Layer Id</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Region Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Latitude Column</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Longitude Column</label>
            </div>
        </div>
    );
}