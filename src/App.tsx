import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import Main from './route/main';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import Plugins from './route/plugins';

import Route from './route';

import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import './index.pcss';

import Article from './route/article';

const routerData = createBrowserRouter([
    { path: "/", element: <Route children={<Main />} /> },
    { path: "/plugins", element: <Route children={<Plugins />} /> },

    { path: "/news", element: <Route children={<Main />} /> },
    { path: "/news/:articleId", element: <Route children={<Article />} /> },

    { path: "/*", element: <Route children={<Main />} /> }
  ]);

const App = () => {
    return (
        <MantineProvider>
            <Notifications />
            <RouterProvider router={routerData} />
        </MantineProvider>
    )
};

export default App;