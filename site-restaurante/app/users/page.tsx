import MealDrinkPage from "@/components/mealDrinkPage";
import SearchBar from "@/components/seatchBar";
import axios from "axios";

export default async function Page() {
	const { data } = await axios.get("http://localhost:3001/pratos");

//   const { data } = await axios.get<DescarregoModel[]>('https://vegas.services.do.ciaa.io/admin/descarregos', {
//     headers: {
//         Authorization: `Bearer ${session!.access_token}`,
//     },
// });

	return (
		<div className="h-screen w-screen">
			<SearchBar />
			<MealDrinkPage data={data} />
		</div>
	);
}
