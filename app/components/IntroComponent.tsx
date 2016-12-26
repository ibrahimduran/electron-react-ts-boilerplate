import * as React from 'react';

interface MyProps {}
interface MyState {}

export default class IntroComponent extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="introduction">
        <h1>Welcome to your brand new app!</h1>
        <p>Now you can create awesome desktop applications using <strong>TypeScript2.0</strong> and <strong>ReactJS</strong>.</p>
        <img className="logo" src="resources/images/react-and-ts.png" />
      </div>
    );
  }
}
