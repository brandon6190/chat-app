import React from 'react';
import Dashboard from './Dashboard.jsx';
import Store from './Store';

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
        <Store>
          <Dashboard />
        </Store>
      </div>
    )
  }
}

export default App;