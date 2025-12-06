import React from 'react';
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import MenuItem from './MenuItem';

const RiderMenu = () => {
    return (
        <div>
            <MenuItem icon={PiPersonSimpleBikeBold} label='Be a Rider' address='rider' />
        </div>
    );
};

export default RiderMenu;