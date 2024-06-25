"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const FormSchema = z.object({
	username: z
		.string()
		.min(3, "username deve ter, ao menos, 3 caracteres")
		.max(20, "username deve ter no máximo 20 caracteres"),
	password: z
		.string()
		.min(1, "password deve ter, ao menos, 1 caracteres")
		.max(20, "password deve ter no máximo 20 caracteres"),
});

type InputType = z.infer<typeof FormSchema>;

export default function LoginForm({ type }: { type: "login" | "register" }) {
	const router = useRouter();
	const {
		reset,
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<InputType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit: SubmitHandler<InputType> = async (data) => {
		const result = await signIn("credentials", {
			redirect: false,
			username: data.username,
			password: data.password,
		});

		if (!result?.ok) {
			toast.error(result?.error || "An error occurred.");
		}

		router.push("/admin");
		// console.log("result", result);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="text-blueGray-400 text-center mb-3 font-bold">
					<small>Entre com suas credenciais</small>
				</div>
				<div className="relative w-full mb-3">
					<label
						htmlFor="grid-password"
						className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					>
						Usuário
					</label>
					<input
						type="text"
						id="username"
						required
						className="border-0 px-3 py-3 placeholder-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						placeholder="Usuário"
						{...register("username")}
					/>
					{errors.username && (
						<p className="text-red-500 text-xs mt-1">
							{errors.username?.message}
						</p>
					)}
				</div>
				<div className="relative w-full mb-3">
					<label
						htmlFor="grid-password"
						className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					>
						Senha
					</label>
					<input
						type="text"
						id="password"
						required
						className="border-0 px-3 py-3 placeholder-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						placeholder="Senha"
						{...register("password")}
					/>
					{errors.password && (
						<p className="text-red-500 text-xs mt-1">
							{errors.password?.message}
						</p>
					)}
				</div>
				<div>
					<label className="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							id="customCheckLogin"
							className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
						/>
						<span className="ml-2 text-sm font-semibold text-blueGray-600">
							Permanecer conectado
						</span>
					</label>
				</div>

				<div className="text-center mt-6">
					<Button
						className={`bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
						type="submit"
						disabled={isSubmitting}
						isLoading={isSubmitting}
					>
						{isSubmitting ? "Entrando ..." : "Entrar"}
					</Button>
				</div>
			</form>
		</>
	);
}
