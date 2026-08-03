"use server"

import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type LoginState = {
    success : boolean,
    statusCode : number,
    message : string,
    data : {
        accessToken : string,
        refreshToken : string
    }
}
export type RegistrationState = {
    success: boolean,
    statusCode: number,
    message: string,
}

export const loginAction = async (redirectTo : string, prevState : LoginState , formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
        email,
        password
    }
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    });
if (!res.ok) {
    return { success: false, statusCode: res.status, message: "something went wrong" }
}
    const result = await res.json();

    if(result.success){
        const cookieStore = await cookies()

        cookieStore.set("accessToken", result.data.accessToken , {
            httpOnly : true,
            maxAge : 60 * 60 * 24,
            sameSite : "lax",
        });
        cookieStore.set("refreshToken", result.data.refreshToken , {
            httpOnly : true,
            maxAge : 60 * 60 * 24 * 7,
            sameSite : "lax",
        });

        const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
if (!decodedToken || !decodedToken.role) {
return {
        success: false,
        statusCode: 500,
        message: " Something went wrong",
    }
}

if(redirectTo && typeof redirectTo === "string" && redirectTo.startsWith("/") && !redirectTo.startsWith("//")){
            redirect(redirectTo)
        }
        if(decodedToken.role === "USER"){
            redirect("/dashboard");
        } else if (decodedToken.role === "ADMIN"){
            redirect("/admin-dashboard");
        } else if (decodedToken.role === "PROVIDER"){
            redirect("/provider-dashboard");
        }
    }

    return result
}
 export const registrationAction = async (
    redirectTo: string,
    prevState: RegistrationState | null,
    formData: FormData
) => {

    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");
    const password = formData.get("password");

    if (!name || !email || !role || !password) {
        return {
            success: false,
            statusCode: 400,
            message: "all fields are required",
        }
    }

    const payload = {
        name,
        email,
        role,
        password
    }

    let res: Response;
    try {
        res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "something went wrong";
        return {
            success: false,
            statusCode: 500,
            message,
        }
    }

    if (!res.ok) {
        const errorResult = await res.json().catch(() => null);
        return {
            success: false,
            statusCode: res.status,
            message: errorResult?.message || "something went wrong",
        }
    }

    const result = await res.json();

    if (result.success) {
        redirect(redirectTo && redirectTo.startsWith("/") && !redirectTo.startsWith("//")
            ? redirectTo
            : "/login"
        );
    }

    return result;
}