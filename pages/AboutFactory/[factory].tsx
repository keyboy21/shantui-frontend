import Mainlayout from '@/components/Layout/Mainlayout'
import { Factory } from '@/interface/Data'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { FC, useState } from 'react'
import classes from './factory.module.css'

type props = {
	factory: Factory
}
const FactoryPage: FC<props> = ({ factory }) => {
	const [message, setMessage] = useState({ name: '', phone: '' })

	const Send = async () => {
		const Mytext = `Спец Техники 🚜🌐%0AСервис:${localStorage.getItem(
			'name',
		)}%0A👤Имя:${message.name}%0A📞Номер телефон:${message.phone}`
		await axios
			.post(
				`https://api.telegram.org/bot5032490328:AAF_lcDsbBYsrrbB5mCQgO-_ivdBAjWZ5ms/sendMessage?chat_id=@ShantuiReferencesChannel&text=${Mytext}`,
			)
			.then((res) => {
				localStorage.clear()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Mainlayout title="| Vehicles">
			<h1 className={classes.bull_h1}>{factory?.name}</h1>
			<div className={classes.bull_div}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className={classes.bullimg}>
								<Image
									src={`${process.env.NEXT_PUBLIC_API_URL}${factory?.image}`}
									alt="bulldozer"
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
						</div>
						<div
							className="modal fade"
							id="modalForm"
							tabIndex={-1}
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Заявкa
										</h5>
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										/>
									</div>
									<div className="modal-body">
										<form onSubmit={Send}>
											<div className="mb-3" style={{ textAlign: 'left' }}>
												<label className="form-label">Имя</label>
												<input
													onChange={(e) =>
														setMessage({ ...message, name: e.target.value })
													}
													type="text"
													className="form-control"
													id="username"
													name="username"
													required
												/>
											</div>
											<div className="mb-3" style={{ textAlign: 'left' }}>
												<label className="form-label">Телефон</label>
												<input
													onChange={(e) =>
														setMessage({ ...message, phone: e.target.value })
													}
													type="tel"
													className="form-control"
													id="telephone"
													name="telephone"
													required
												/>
											</div>
											<div className="modal-footer d-block">
												<button
													type="submit"
													className="btn btn-warning float-end"
												>
													Отправить заявку
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className={`${classes.out}`}>
							<div className={classes.bull_t}>
								{/* <a href={factory?.doc} download target="_blank" rel='noreferrer'>
                  <span className={classes.bull_button} >
                    Скачать брошюру
                  </span>
                </a> */}
								<span
									onClick={() => localStorage.setItem('name', factory?.name)}
									className={classes.bull_button}
									data-bs-toggle="modal"
									data-bs-target="#modalForm"
								>
									Оставить заявку на эту сервис
								</span>
								<hr style={{ marginBottom: '25px' }} />

								<div
									className={classes.top}
									dangerouslySetInnerHTML={{ __html: factory?.description }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Mainlayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await axios(`${process.env.API_URL}/api/f/${params?.factory}`)
	const factory = res.data.data as Factory

	if (!factory) {
		return { notFound: true }
	}

	return {
		props: {
			factory,
		},
	}
}

export default FactoryPage
