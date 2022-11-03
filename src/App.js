
import './App.css';

import { SignatureComponent, Signature } from '@syncfusion/ej2-react-inputs';

function App() {

  let signObj: Signature | null;
  const OnSave = () => {
    signObj?.save();
  }
  const OnClear = () => {
    signObj?.clear();
  }
  return (
    <div className="App">
      <SignatureComponent ref={sign => signObj = sign}
       >
    
      </SignatureComponent>

      <div id="actionBtn">
        <button onClick={OnSave}>Save</button>
        <button onClick={OnClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
