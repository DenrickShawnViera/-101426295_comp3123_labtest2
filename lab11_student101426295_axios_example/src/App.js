import React from 'react';
import PersonList from './PersonList';        // Axios version
import PersonListFetch from './PersonListFetch';  // Fetch version

function App() {
  return (
    <div className="App">
      <PersonList />        {/* Axios */}
      <hr />
      <PersonListFetch />   {/* Fetch */}
    </div>
  );
}

export default App;
