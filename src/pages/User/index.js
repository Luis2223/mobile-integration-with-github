import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';
import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({
            stars: response.data,
            loading: false,
        });
    }

    handleNavigation = (link) => {
        const { navigation } = this.props;
        navigation.navigate('Repo', { link });
    };

    render() {
        const { navigation } = this.props;
        const { stars, loading } = this.state;

        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>
                {loading ? (
                    <ActivityIndicator color="#ddd" size={120} />
                ) : (
                    <Stars
                        data={stars}
                        keyExtractor={(star) => String(star.node_id)}
                        renderItem={({ item }) => (
                            <Starred
                                onPress={() => {
                                    this.handleNavigation(item.html_url);
                                }}
                            >
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                )}
            </Container>
        );
    }
}
