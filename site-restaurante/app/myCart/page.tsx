"use client";
import { Button, Card, Text } from "@tremor/react";
import { SetStateAction, useEffect, useState } from "react";

export default function Page() {
	interface CartItem {
		id: number;
		name: string;
		price: number;
		quantity: number;
		image: string;
	}

	const [totalMeals, setTotalMeals] = useState<Record<string, number>>(() => {
		return JSON.parse(localStorage.getItem("totalMeals") || "{}");
	});
	// const [totalMeals, setTotalMeals] = useState<Record<string, number>>({});
	const [totalValue, setTotalValue] = useState(0);
	const [paymentMethod, setPaymentMethod] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			setCartItems(cart);
		}
	}, []);
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const newTotalValue = cart.reduce(
			(acc: number, item: { price: number; quantity: number }) =>
				acc + item.price * item.quantity,
			0
		);
		setTotalValue(newTotalValue);
	}, [totalMeals]);

	const handlePaymentMethodChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setPaymentMethod(event.target.value);
	};

	const handleQuantity = (id: string, action: string) => {
		const currentTotal = totalMeals[id] || 0;
		if (action === "increase") {
			setTotalMeals({ ...totalMeals, [id]: currentTotal + 1 });
			if (currentTotal === 0) {
				setIsDisabled(false);
			}
		} else if (action === "decrease" && currentTotal > 0) {
			setTotalMeals({ ...totalMeals, [id]: currentTotal - 1 });
			if (currentTotal - 1 === 0) {
				setIsDisabled(true);
				const cart = JSON.parse(localStorage.getItem("cart") || "[]");
				const updatedCart = cart.filter((item: any) => item.id !== id);
				localStorage.setItem("cart", JSON.stringify(updatedCart));
			}
		}
	};

	const handleDelete = (id: string) => {
		// Remove a ID do estado totalMeals
		const newTotalMeals = { ...totalMeals };
		delete newTotalMeals[id];
		setTotalMeals(newTotalMeals);

		// Remove a ID do localStorage
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const updatedCart = cart.filter((item: any) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));

		// Atualiza a página
		if (typeof window !== "undefined") {
			window.location.reload();
		}
	};

	return (
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto h-screen">
			<div className="max-w-1/2 mx-auto">
				{cartItems.map((data) => {
					const totalMeal = totalMeals[data.id] || 0;

					return (
						<Card
							key={data.id}
							className="flex-1 m-2 backdrop-blur-md bg-opacity-20 bg-green-100 flex flex-col items-center text-center"
						>
							<div className="w-full">
								<img
									src={data.image}
									alt={data.name}
									className="w-full h-auto mx-auto"
									style={{
										height: "200px",
										width: "200px",
										objectFit: "cover",
									}}
								/>
							</div>
							<Text>{data.name}</Text>
							{/* <Text>{data.price}</Text> */}
							<Text>Preço: {data.price}</Text>

							<div className="flex justify-center items-center">
								<Button
									className="border-none bg-red-500 hover:bg-red-700 rounded-full"
									onClick={() => handleDelete(data.id.toString())}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="#000000"
										viewBox="0 0 256 256"
									>
										<path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
									</svg>
								</Button>
							</div>
						</Card>
					);
				})}
				{cartItems.length === 0 && <div>Não há itens no carrinho</div>}
			</div>
			<div className="fixed right-0 border-none shadow-lg backdrop-blur-md bg-opacity-20 bg-green-100 w-1/5 h-screen m-15">
				<Card className="">
					{cartItems.map((item) => (
						<div className="flex justify-between mt-5  ml-5">
							<h2>{item.name}:</h2>
							<p className="mr-10">{item.price * item.quantity}</p>
						</div>
					))}
					<div className="flex justify-between mt-10 text-lg ml-10">
						<h2>Total:</h2>
						<p className="mr-10">
							{cartItems.reduce(
								(acc, item) => acc + item.price * item.quantity,
								0
							)}
						</p>
					</div>
					<div className="mt-5">
						<label htmlFor="payment-method" className="block text-lg">
							Método de pagamento:
						</label>
						<select
							id="payment-method"
							className="block w-full mt-2 text-black"
							onChange={handlePaymentMethodChange}
						>
							<option className="text-black">Cartão de crédito</option>
							<option className="text-black">Boleto</option>
							<option className="text-black">Pix</option>
							{/* Adicione mais opções conforme necessário */}
						</select>
					</div>
					{paymentMethod === "Cartão de crédito" && (
						<div className="mt-5">
							<label htmlFor="card-number" className="block text-lg">
								Número do cartão:
							</label>
							<input
								id="card-number"
								className="block w-full mt-2 text-black"
								type="text"
							/>
						</div>
					)}
					<Button className="bg-green-500 w-full rounded-lg mt-10 hover:bg-green-700 border-none h-10">
						comprar
					</Button>
				</Card>
			</div>
		</div>
	);
}
