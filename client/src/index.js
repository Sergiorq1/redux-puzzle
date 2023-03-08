// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));




// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// This example uses React Query. Follow these steps
// 1) Import the QueryProvider and QueryClient. 
import { QueryClientProvider, QueryClient } from 'react-query';

// 2) Create an instance of QueryClient
const queryClient = new QueryClient()

// 3) Wrap your app in the QueryClientProvider and add your 
// queryClient as a prop (looks like dependency injection)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* QueryClientProvider wraps App! */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
