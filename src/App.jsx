import React from 'react';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AppStyle = {
      textAlign: 'center'
    }
    return (
      <div style={AppStyle}>
        <Dashboard />
      </div>
    )
  }
}

export default App;