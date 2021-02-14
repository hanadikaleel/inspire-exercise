import React, {useState, useEffect} from 'react';
import List from "../Components/ListItemView"

function Main() {
  const [appState, setAppState] = useState<{
    records: any[] | null}> ({records:null})
  useEffect(() => {
    fetch(`https://inspirehep.net/api/literature?fields=titles.title,abstracts.value`)
      .then((res) => res.json())
      .then((records) => {
        setAppState({ records: records.hits.hits });
      });
  }, [setAppState]);
  return (
    <div className="Page">
      <div>
        <p className='results'> Total Results: {appState.records?.length}</p>
      </div>
      <div>
        <List records={appState.records} />
      </div>
    </div>
  );
}
export default Main;
