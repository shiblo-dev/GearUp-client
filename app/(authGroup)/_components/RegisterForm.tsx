 "use client"

import { useSearchParams } from 'next/navigation';
import React, { useActionState, useEffect } from 'react'
import { registrationAction, RegistrationState } from '../_actions/authActions';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RegisterForm = () => {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? ""

    const actionWithRedirect = (prevState: RegistrationState | null, formData: FormData) =>
        registrationAction(redirectTo, prevState, formData)

    const [state, action, pending] = useActionState(
        actionWithRedirect,
        null
    )

    useEffect(() => {
        if (!state) return;

        if (!state.success) {
            toast.error(state.message || "Registration failed");
        } else {
            toast.success("Registration Successful!");
        }
    }, [state]);

    return (
        <form action={action} className="space-y-4">
            <Card className="p-5 space-y-4">
                <Input name="name" type="text" placeholder="Enter Your Name" required />
                <Input name="email" type="email" placeholder="Enter Your email" required />
                <Input name="role" type="text" placeholder="Enter Your role" required />
                <Input name="password" type="password" placeholder="Enter Your Password" required />
                <Button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Register"}
                </Button>
            </Card>
            <p className="text-sm text-center">
                Already have an account? <Link href="/login" className="underline">Login</Link>
            </p>
        </form>
    )
}

export default RegisterForm