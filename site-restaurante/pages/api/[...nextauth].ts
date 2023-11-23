import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const secret = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {},
            // @ts-ignore
            async authorize(credentials, _) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                    grant_type: "password",
                    client_id: "abc",

                };
                if (!username || !password ) {
                    throw new Error('Missing username or password');
                }

                const email = `${username}@$email`;

                const auth = await fetch('http://localhost:3001/auth/token', {
                    body: JSON.stringify({
                        user: username,
                        pass: password,
                        grant_type: "password",
                        client_id: "abc",
                    }),
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (!auth.ok) {
                    throw new Error('ops, something went wrong');
                }
                const user = await auth.json();
                return {
                    name: user.username,
                    sub: user.id,
                    ...user,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user, trigger }) => {
            if (!user) {
                return token;
            }
            const { token: access_token } = user as any;
            return {
                access_token,

                ...token,
            };
        },
        session({ session, token }) {
            return {
                access_token: token.access_token,
                user: {
                    ...session.user,
                    access_token: token.access_token,

                },
            } as any;
        },
    },
    debug: true,
    session: { strategy: 'jwt' },
};
export default NextAuth(authOptions);
