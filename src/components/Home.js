import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { loadAllUsers } from '../store/userProfileAction';
import Loader from './Loader';
import Users from './Users';

export const mapStateToProps = (state) => ({
    usersList: state.userProfileReducer.usersList
});

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: (query) => dispatch(loadAllUsers(query))
    }
};

const Home = ({ fetchAllUsers, usersList }) => {
    useEffect(() => {
        fetchAllUsers('?delay=3')
    }, [])

    return (
        <React.Fragment>
            {usersList !== undefined && usersList.data ? <Users usersList={usersList} /> : <Loader /> }
        </React.Fragment>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);