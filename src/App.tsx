import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import Main from './route/main';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import Plugins from './route/plugins';
import Header from './components/header';
import Footer from './components/footer';

const routerData = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/plugins", element: <Plugins /> }
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