import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';


const handleAuth = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                try {
                    const res = await fetch(`${process.env.API_URL_AUTH}/login`,   {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        })
                    })
                    const user = await res.json();
                    console.log('lo que me trae del backend',user);
                    if (res.ok && user) {
                        return user
                    }
                    return null;
                } catch (error) {
                    console.error('Authorize error:', error);
                    throw new Error('Fetch failed');
                }

            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token}) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    }
})

export { handleAuth as POST, handleAuth as GET }