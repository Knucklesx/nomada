import WaitersPage from "@/components/waiters";
import { authOptions } from "@/pages/api/[...nextauth]";
import { getServerSession } from 'next-auth';

interface Waiters {
	id: number;
	name: string;
  total_sale: number;
}
export default async function Page() {


	const session = await getServerSession(authOptions);
	console.log('seesion', session)
  return (
    <WaitersPage session={session!}/>
  )
}
