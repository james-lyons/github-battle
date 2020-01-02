import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../containers/TooltipContainer/Tooltip';
import { FaCompass, FaBriefcase, FaUserFriends, FaUser } from 'react-icons/fa'

const ProfileList = ({ profile }) => {
    return (
        <ul className='card-list'>
            <li>
                <FaUser color='rgb(239, 115, 115)' size={ 22 } />
                { profile.name }
            </li>
            { profile.location && (
                <li>
                    <Tooltip text="User's location">
                        <FaCompass color='rgb(144, 115, 255)' size={ 22 } />
                        { profile.location }
                    </Tooltip>
                </li>
            )}
            { profile.company && (
                <li>
                    <FaBriefcase color='#795548' size={ 22 } />
                    { profile.company }
                </li>
            )}
            <li>
                <Tooltip text="User's company">
                    <FaBriefcase color='#795548' size={22} />
                    { profile.company }
                </Tooltip>
            </li>
            <li>
                <FaUserFriends color='rgb(64, 183, 95)' size={ 22 } />
                { profile.following.toLocaleString() } following
            </li>
        </ul>
    )
}

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileList;