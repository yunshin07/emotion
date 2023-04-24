import { createBrowserRouter } from 'react-router-dom';
import { OptionContextProvider } from '../contexts';
import App from '../App';
import SubApp from '../SubApp';

export const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <OptionContextProvider>
          <SubApp />
        </OptionContextProvider>
      ),
    },
    {
      path: '/sub',
      element: (
        <OptionContextProvider>
          <App />
        </OptionContextProvider>
      ),
    },
  ],
  {
    basename: '/article-survey/',
  }
);

export default null;
