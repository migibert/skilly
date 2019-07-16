import React from 'react';
import ReactDOM from 'react-dom';
import nock from 'nock';
import App from './App';

beforeAll(() => {
  nock('http://localhost:8080').get('/organizations').reply(200, []);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
