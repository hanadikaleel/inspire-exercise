import React, {useState, useEffect} from 'react';
import List from "./Components/ListItemView"
import './App.css';

function App() {
  const [appState, setAppState] = useState<{
    records: any[] | null}> ({records:null})
  useEffect(() => {
    fetch(`https://inspirehep.net/api/literature`)
      .then((res) => res.json())
      .then((records) => {
        setAppState({ records: records.hits.hits });
      });
  }, [setAppState]);
  return (
    <div className="MainPage">
      <div>
        <p className='results'> Total Results: {appState.records?.length}</p>
      </div>
      <div>
        <List records={appState.records} />
      </div>
    </div>
  );
}
export default App;
