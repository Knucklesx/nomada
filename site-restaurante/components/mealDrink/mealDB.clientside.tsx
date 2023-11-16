"use client";
import { MealModel } from "@/lib/mealModel";
import { Card, Text } from "@tremor/react";

interface MyMealsProps {
	mealList: MealModel[];
}

export default function MyMeals({ mealList }: MyMealsProps) {
	console.log(mealList);

	if (mealList === null) {
		return <div>Loading...</div>;
	}

	return (
		// <div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
		// 	{mealList.map((data) => {
		// 		return (
		// 			<Card key={data.id} className="flex-1 m-2">
		//         <img>{data.image}</img>
		// 				<Text>{data.name}</Text>
		// 				<Text>{data.price}</Text>
		// 			</Card>
		// 		);
		// 	})}
		// </div>
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
			{mealList.map((data) => {
				return (
					<Card key={data.id} className="flex-1 m-2">
						<img src={data.image} alt={data.name} className="w-full h-auto" />
						<Text>{data.name}</Text>
						<Text>{data.price}</Text>
					</Card>
				);
			})}
		</div>
	);
}
