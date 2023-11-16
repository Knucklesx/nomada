import { MealModel } from "@/lib/mealModel";
import {
	Flex,
	ProgressBar,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Text,
} from "@tremor/react";
import PropTypes from "prop-types";
import MyMeals from "./mealDrink/mealDB.clientside";

MealDrinkPage.defaultProps = {
	data: [],
};

MealDrinkPage.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export interface MealDrinkPageProps {
	data: MealModel[];
}

const defaultProps: MealDrinkPageProps = {
	data: [],
};

export default async function MealDrinkPage({
	data,
}: MealDrinkPageProps = defaultProps) {
	console.log(data);

	return (
		<TabGroup className="pt-10">
			<TabList className="mt-8">
				<Tab>Promoção</Tab>
				<Tab>Frutos do Mar</Tab>
				<Tab>Burguers</Tab>
				<Tab>Bebidas</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<div className="mt-10">
						<Flex className="mt-4">
							{/* <Text className="w-full">Prod</Text> */}

							{/* <div className="flex flex-block"> */}
								<MyMeals mealList={data} />
							{/* </div> */}
						</Flex>
						<ProgressBar value={38} className="mt-2" />
					</div>
				</TabPanel>
				<TabPanel>
					<div className="mt-10">
						<Flex className="mt-4">
							<Text className="w-full">Product Z</Text>
							<Flex className="space-x-2" justifyContent="end">
								<Text>$ 99,484</Text>
								<Text>16%</Text>
							</Flex>
						</Flex>
						<ProgressBar value={12} className="mt-2" />
					</div>
				</TabPanel>
			</TabPanels>
		</TabGroup>
	);
}
