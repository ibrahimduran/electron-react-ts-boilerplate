import * as React from 'react';
import * as ReactDOM from 'react-dom';

import IntroComponent from './components/IntroComponent';

interface MyProps {}
interface MyState {}

class App extends React.Component<MyProps, MyState> {
  render() {
    return (
      <IntroComponent />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
