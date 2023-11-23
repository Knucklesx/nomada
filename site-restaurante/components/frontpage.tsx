"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FrontPage() {
	const router = useRouter();
	const [isShown, setIsShown] = useState(false);
	const handleGoToUser = () => {
		router.push("/users");
	};

	const handleGoToWaiter = () => {
		//  router.push("/waiters");
		setIsShown(true);
	};

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [myUser, setMyUser] = useState("");

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await axios.post("http://localhost:3001/auth/token", {
				username,
				password,
				grant_type: "password",
				client_id: "abc",
			});

			console.log(response.data);
			setMyUser(response.data.username);

			// Redireciona para a página "waiters" se a requisição for bem-sucedida
			router.push("/waiters");
} catch (error: any) {
  console.error(error);
  alert("Ocorreu um erro");

  router.push("/");
}
	};

	if (isShown) {
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Username:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="text-black"
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="text-black"
						/>
					</label>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		);
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="title text-black text-6xl ">
					<p>NO</p>
					<p>MA</p>
					<p>DA</p>
				</h1>
				<div className="p-8 flex flex-row justify-center space-x-4">
					<button
						onClick={handleGoToUser}
						className={`bg-green-900 text-white active:bg-green-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none ocus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
					>
						Sou Cliente
					</button>
					<button
						onClick={handleGoToWaiter}
						className={`bg-green-900 text-white active:bg-green-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
					>
						Sou garçom
					</button>
				</div>
			</div>
		</>
	);
}
