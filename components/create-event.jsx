"use client";

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EventForm from "./event-form";

export default function CreateEventDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const params = useSearchParams();

    useEffect(() => {
        const create = params.get("create");
        if (create === "true") {
            setIsOpen(true);
        }
    }, [params]);

    const handleClose = () => {
        setIsOpen(false);
        if (params.get("create") === "true") {
            router.replace(window?.location?.pathname);
        }
    }

    return (
        <Drawer open={isOpen} onClose={handleClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Create New Event</DrawerTitle>
                </DrawerHeader>
                <EventForm onSubmitForm={() => {
                    handleClose();
                }} />
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline" onClick={handleClose}>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
