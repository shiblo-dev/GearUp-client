"use server"

import { cookies } from "next/headers";

export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: "no-store"
        });

        if (!res.ok) {
            return { success: false, message: " profile not found" }
        }

        const result = await res.json();
        return result;

    } catch (error) {
        return { success: false, message: " something went wrong" }
    }
}