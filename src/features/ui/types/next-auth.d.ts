import nextAuth from "next-auth";

declare module "next-auth" {

    interface Session{
        user:{
            id?: number | null | undefined;
            email: string | null | undefined;
            country?: string | null | undefined;
            token?: string | null | undefined;
            name?: string | null | undefined;
            role?: string | null | undefined;
        }
    }
}