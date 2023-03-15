
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import testing from 'testing';
// import testing from './testing';
// import Testing from './testing';
import RootRouter from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render("Testing");
root.render(<RouterProvider router={RootRouter} />);
