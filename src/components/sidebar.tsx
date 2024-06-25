"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = useState("hidden");
	const router = usePathname() || "";
	const myRouter = useRouter();
	return (
		<>
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
					></button>
					<Link
						href="/admin"
						className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
					>
						VEGAS
					</Link>
					<ul className="md:hidden items-center flex flex-wrap list-none">
						<li className="inline-block relative"></li>
						<li className="inline-block relative"></li>
					</ul>

					<div
						className={
							"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
							collapseShow
						}
					>
						<div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link
										href="/"
										className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
									>
										VEGAS ADMIN
									</Link>
								</div>
								<div className="w-6/12 flex justify-end">
									<button
										type="button"
										className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
										onClick={() => setCollapseShow("hidden")}
									></button>
								</div>
							</div>
						</div>
						<form className="mt-6 mb-4 md:hidden">
							<div className="mb-3 pt-0">
								<input
									type="text"
									placeholder="Search"
									disabled={true}
									className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
								/>
							</div>
						</form>

						<hr className="my-4 md:min-w-full" />
						<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Administração
						</h6>

						<ul className="md:flex-col md:min-w-full flex flex-col list-none">
							<li className="items-center">
								<Link
									href="/admin"
									className={
										"text-xs uppercase py-3 font-bold block " +
										// (router.startsWith('/admin') ? 'text-lightBlue-500 hover:text-lightBlue-600'    : 'text-blueGray-700 hover:text-blueGray-500')
										(router === "/admin"
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i
										className={
											"fas fa-tv mr-2 text-sm " +
											// (router.startsWith('/admin/dashboard') ? 'opacity-75' : 'text-blueGray-300')
											(router === "/admin" ? "opacity-75" : "text-blueGray-300")
										}
									></i>{" "}
									Dashboard
								</Link>
							</li>

							<li className="items-center">
								<Link
									href="/admin/users"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/users")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i
										className={
											"fas fa-table mr-2 text-sm " +
											(router.startsWith("/admin/users")
												? "opacity-75"
												: "text-blueGray-300")
										}
									></i>{" "}
									Usuários
								</Link>
							</li>
						</ul>

						<hr className="my-4 md:min-w-full" />

						<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Sorteios
						</h6>

						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="items-center">
								<Link
									href="/admin/sweepstakes?page=0&size=10"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/sweepstakes")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
									Sorteios
								</Link>
							</li>
							<li className="items-center">
								<Link
									href="/admin/bilhetes?page=0"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/bilhetes")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
									Bilhetes
								</Link>
							</li>
							<li className="items-center">
								<Link
									href="/admin/ganhadores?page=0"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/ganhadores")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
									Ganhadores
								</Link>
							</li>
							{/* <li className="items-center">
                                <button
                                    disabled
                                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block">
                                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Auto bingo
                                </button>
                            </li> */}
							<li className="items-center">
								<Link
									href="/admin/descarrego"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/descarrego")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
									Descarrego
								</Link>
							</li>
						</ul>

						<hr className="my-4 md:min-w-full" />

						<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Financeiro
						</h6>

						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="items-center">
								<Link
									href="/admin/caixa"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/caixa")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
									Caixa
								</Link>
							</li>

							<li className="items-center">
								<Link
									href="/admin/finances"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/finances")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
									Lançamentos
								</Link>
							</li>
							<li className="items-center">
								<Link
									href="/admin/recolhimento"
									className={
										"text-xs uppercase py-3 font-bold block " +
										(router.startsWith("/admin/recolhimento")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
									Recolhimento
								</Link>
							</li>
						</ul>

						<hr className="my-4 md:min-w-full" />

						<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Segurança
						</h6>

						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="inline-flex">
								<a
									href="/admin/configuration"
									className={
										"text-xs  py-3 font-bold block uppercase " +
										(router.startsWith("/admin/configuration")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
									Configurações
								</a>
							</li>

							<li className="inline-flex">
								<Link
									href="/admin/audits"
									className={
										"text-xs  py-3 font-bold block uppercase " +
										(router.startsWith("/admin/audits")
											? "text-lightBlue-500 hover:text-lightBlue-600"
											: "text-blueGray-700 hover:text-blueGray-500")
									}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
									Auditoria
								</Link>
							</li>

							<li className="inline-flex">
								<a
									href="#"
									className="text-blueGray-700 hover:text-blueGray-500 mb-4 no-underline text-xs  py-3 font-bold block uppercase"
									onClick={(e) => {
										e.preventDefault();
										signOut();
										myRouter.push("/");
									}}
								>
									<i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
									SAIR
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
