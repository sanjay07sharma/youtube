import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Subscriptions from './components/Subscriptions';
import Channel from './components/Channel';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: '/watch',
        element: <WatchPage/>
      },
      {
        path: '/channel',
        element: <Channel/>
      }
    ],
  },
  {
    path: '/@',
    element: <Subscriptions/>
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
