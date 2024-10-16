import { getUserEvents } from '@/actions/events';
import EventCard from '@/components/event-card';
import FallbackUI from '@/components/fallbackUi';
import React, { Suspense } from 'react';

export default function EventsPage() {
    return (
        <Suspense fallback={<div><FallbackUI /></div>}>
            <Events />
        </Suspense>
    )
}

const Events = async () => {
    const { events, username } = await getUserEvents();

    if (events.length === 0) {
        return <p className='text-3xl text-blue-500'>
            You haven&apos;t created any events yet.
        </p>
    }

    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
            {events.map((event) => (
                <EventCard key={event.id} event={event} username={username} />
            ))}
        </div>
    )
}