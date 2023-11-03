

export const HexbinLayerInput = () => {

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="latitudeInput" placeholder="" />
                <label htmlFor="latitudeInput">Latitude Column</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="longitudeInput" placeholder="" />
                <label htmlFor="longitudeInput">Longitude Column</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="binningInput" placeholder="" />
                <label htmlFor="binningInput">Binning Column</label>
            </div>
            <div className="form-floating mb-2">
                <select className="form-select" id="binningFunctionInput" aria-label="Floating label select example">
                    <option selected value="1">Sum</option>
                    <option value="2">Min</option>
                    <option value="3">Max</option>
                    <option value="4">Avg</option>
                </select>
                <label htmlFor="binningFunctionInput">Binning function</label>
            </div>
            <div>
                <label htmlFor="hexResRangeInput" className="form-label">Hexagonal Resolution (0-15)</label>
                <input type="range" className="form-range" id="hexResRangeInput" min="0" max="15" step="1"/>
            </div>
        </div>
    );
}