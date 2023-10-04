import React from 'react';
import ReactDOM from 'react-dom/client';

import Todo from './components/Todo'

 function App(){
    return <Todo />
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  