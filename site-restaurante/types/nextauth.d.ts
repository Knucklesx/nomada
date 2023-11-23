// nextauth.d.ts
import 'next-auth';

declare module 'next-auth' {

    export interface VegasUser extends User {
        access_token: string;
        name: string;
    }

    export interface Session extends DefaultSession {
        access_token: string;
        user: VegasUser;
    }
}
