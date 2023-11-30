import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'
import Logo from '../../public/Logo.svg'
import MyButton from '../Mybutton/Button'
import Footer from './Footer'
import FilterHook from './filterHook'
import classes from './mainlatout.module.css'

type props = {
	children: React.ReactNode
	title?: string
}

const Mainlayout: FC<props> = ({ children, title = '' }) => {
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement | null>(null)

	const { startfilter, filteredName, pending, visible, setvisible } =
		FilterHook()

	const inputChange = () => {
		if (inputRef.current) startfilter(inputRef.current.value)
	}

	const MouseMove = () => {
		setvisible(false)
	}

	const handleClick = () => {
		setvisible(!visible)
	}

	return (
		<>
			<Head>
				<title>{`Spets Texnika Tashkent ${title}`}</title>
			</Head>
			<nav
				className={`navbar navbar-expand-lg fixed-top navbar-light ${classes.navbar1}`}
				onMouseLeave={MouseMove}
			>
				<div className="container" style={{ maxWidth: '1440px' }}>
					<Link
						href="/"
						className="navbar-brand"
						title="Spets Texnika Tashkent"
						aria-label="Stt Web Page"
					>
						<Image alt="logo" src={Logo} />
					</Link>
					<button
						className={`navbar-toggler ${classes.navbartoggler1}`}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className={`collapse navbar-collapse ${classes.navbarcollapse}`}
						id="navbarSupportedContent"
					>
						<ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${classes.barnav}`}>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href="/"
									className={
										router.pathname === '/'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
									aria-current="page"
								>
									Главная
								</Link>
							</li>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href="/SpecVehicles"
									className={
										router.pathname === '/SpecVehicles'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
								>
									Спецтехника
								</Link>
							</li>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href="/Factory"
									className={
										router.pathname === '/Factory'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
									prefetch={false}
								>
									Заводы
								</Link>
							</li>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href={'/Projects'}
									className={
										router.pathname === '/Projects'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
									prefetch={false}
								>
									Проекты
								</Link>
							</li>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href="/Service"
									className={
										router.pathname === '/Service'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
									prefetch={false}
								>
									Сервис
								</Link>
							</li>
							<li className={`nav-item ${classes.ntem}`}>
								<Link
									href="/Contact"
									className={
										router.pathname === '/Contact'
											? `nav-link active ${classes.active}`
											: `nav-link ${classes.navlink1}`
									}
									prefetch={false}
								>
									Контакты
								</Link>
							</li>

							<input
								className={
									visible
										? `input_rights active ${classes.irightsactive}`
										: `input_rights ${classes.irights}`
								}
								ref={inputRef}
								type="serach"
								list="searchbar"
								onChange={inputChange}
							/>

							{visible && inputRef.current?.value ? (
								<div className={`data-result ${classes.dataresult}`}>
									{pending
										? 'Загрузка...'
										: filteredName.map((name) => {
												return (
													<a
														className={`${classes.resttitle}`}
														href={`/Bulldozer/${name.id}`}
														key={name.id}
													>
														<div className={`${classes.dataitems}`}>
															{name.name}
														</div>
													</a>
												)
										  })}
								</div>
							) : null}
						</ul>
						<div
							className={`search-icon ${classes.sicon}`}
							onClick={handleClick}
							title="Поиск"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M0 4C0 1.79086 1.79086 0 4 0H44C46.2091 0 48 1.79086 48 4V44C48 46.2091 46.2091 48 44 48H4C1.79086 48 0 46.2091 0 44V4Z"
									fill="#F2F2F2"
								/>
								<path
									className={
										visible
											? `active ${classes.iconsvgactive}`
											: `${classes.iconsvg}`
									}
									d="M23 31C27.4183 31 31 27.4183 31 23C31 18.5817 27.4183 15 23 15C18.5817 15 15 18.5817 15 23C15 27.4183 18.5817 31 23 31Z"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									className={
										visible
											? `active ${classes.iconsvgactive}`
											: `${classes.iconsvg}`
									}
									d="M33 32.9999L28.65 28.6499"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<a
							href="https://shantui.westcoast.uz/files/catalog.pdf"
							title="Download catalog"
							download
							target="_blank"
							rel="noreferrer"
						>
							<MyButton>Скачать каталог</MyButton>
						</a>
					</div>
				</div>
			</nav>
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Mainlayout
