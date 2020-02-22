import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";

interface IMstp {
    name: string
    isAuth: boolean
}

class Profile extends React.Component<IMstp> {
    render() {
        return (
            <div>
                <h2>Profile</h2>
                {this.props.name}
            </div>
        );
    }
}

const mstp = (state: AppStateType): IMstp => ({
    name: state.profile.name,
    isAuth: state.profile.isAuth
});

const ConnectedProfile = connect(mstp, {})(Profile);
export default ConnectedProfile;
