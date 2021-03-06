import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repo from './pages/Repo';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            Repo,
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#ffc38f',
                },
                headerTintColor: '#FFF',
                headerTitleAlign: 'center',
            },
        }
    )
);

export default Routes;
