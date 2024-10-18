"use client";

import { availabilitySchema } from '@/app/_lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const AvailabilityForm = ({ initialData }) => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(availabilitySchema),
        defaultValues: { ...initialData },
    });

    return (
        <form>
            {[
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "sunday",
            ].map((day) => {
                return (
                    <Controller />
                )
            })}
        </form>
    )
}

export default AvailabilityForm;