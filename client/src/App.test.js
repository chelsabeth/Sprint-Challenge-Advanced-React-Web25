import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react"

// import Display from "./components/Display";
import NavBar from "./components/NavBar";
// import useDarkMode from './hooks/useDarkMode';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

// test("Display renders without crashing", () => {
//   const data = [
//     {name: "Alex Morgan", country: "United States", searches: 100}
//   ]
//   render(<Display data={data}/>);
// });

test("NavBar renders correctly", () => {
  render(<NavBar/>);
});

test("App renders correctly", () => {
  render(<App/>);
});

// test("useDarkMode renders correctly", () => {
//   render(<useDarkMode/>);
// });
