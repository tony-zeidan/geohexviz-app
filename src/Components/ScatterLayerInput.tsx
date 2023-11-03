

export const ScatterLayerInput = () => {

    return (
        <div>
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