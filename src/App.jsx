import React from 'react';
import './style.css'; 

import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <Dashboard />
      </div>
    )
  }
}

export default App;