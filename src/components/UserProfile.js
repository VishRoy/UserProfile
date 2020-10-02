import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadUser } from '../store/userProfileAction';
import {Card} from 'react-bootstrap';

export const mapStateToProps = (state) => ({
    userDetails: state.userProfileReducer.userDetails
});

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (query) => dispatch(loadUser(query))
    }
};

const UserProfile = ({ fetchUser, userDetails }) => {
    const { id } = useParams();
    const userId = id;

    useEffect(() => {
        fetchUser(`${userId}`)
    }, [userId])

    return (
        <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                <Card style={{ width: '30rem' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Header>{userDetails?.data?.first_name} {userDetails?.data?.last_name}</Card.Header>
                    <Card.Body>
                        <Card.Img src={userDetails?.data?.avatar} style={{ width: '15rem' }} />
                        <Card.Text>First Name : {userDetails?.data?.first_name} </Card.Text>
                        <Card.Text>Last Name : {userDetails?.data?.last_name}</Card.Text>
                        <Card.Text>Email : {userDetails?.data?.email}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);