import './App.css'
import {LayerInput} from "./LayerInput";

function App() {

  return (
    <>
      <div>
          <LayerInput layerName='hexbin' maxLimit={1} minLimit={1} required={true}/>
          <LayerInput layerName='region' maxLimit={5} minLimit={0} required={false}/>
          <LayerInput layerName='emptygrid' maxLimit={5} minLimit={0} required={false}/>
          <LayerInput layerName='scatter' maxLimit={5} minLimit={0} required={false}/>
      </div>
    </>
  )
}

export default App
