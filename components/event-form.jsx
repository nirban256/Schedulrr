import { eventSchema } from '@/app/_lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const EventForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            duration: 30,
            isPrivate: true,
        }
    })

    return (
        <form
            className="px-6 flex flex-col gap-4"
        // onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Event Title
                </label>

                <Input id="title" {...register("title")} className="mt-1" />

                {errors.title && (
                    <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>

                <Textarea
                    {...register("description")}
                    id="description"
                    className="mt-1"
                />
                {errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="duration"
                    className="block text-sm font-medium text-gray-700"
                >
                    Duration (minutes)
                </label>

                <Input
                    id="duration"
                    {...register("duration", {
                        valueAsNumber: true,
                    })}
                    type="number"
                    className="mt-1"
                />

                {errors.duration && (
                    <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="isPrivate"
                    className="block text-sm font-medium text-gray-700"
                >
                    Event Privacy
                </label>
                <Controller
                    name="isPrivate"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value === "true")}
                            value={field.value ? "true" : "false"}
                        >
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select privacy" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Private</SelectItem>
                                <SelectItem value="false">Public</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>

            {errors && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}

            <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Create Event"}
            </Button>
        </form>
    )
}

export default EventForm;