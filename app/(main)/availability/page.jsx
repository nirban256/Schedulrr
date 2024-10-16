"use server";

import { getUserAvailability } from '@/actions/availability';
import React from 'react'

const AvailabilityPage = async () => {
    const availability = await getUserAvailability();
    console.log(availability);

    return (
        <div>page</div>
    )
}

export default AvailabilityPage;