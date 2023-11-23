"use client";

import { Session } from "next-auth";

export default function WaitersPage({ session }: { session: Session }) {
	console.log('waiuters', session);

	return <h1>OI</h1>;
}
