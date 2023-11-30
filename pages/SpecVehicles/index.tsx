import Mainlayout from '@/components/Layout/Mainlayout'
import Vehiclescard from '@/components/SpecVehiclesCard/SpecVehiclescard'
import { specCategory, specVehicles } from '@/interface/Data'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import classes from './vehicles.module.css'

type props = {
	category: specCategory[]
	product: specVehicles[]
}

const Vehicles: FC<props> = ({ category, product }) => {
	const router = useRouter()
	const { id } = router.query

	const [vehicles, setVehicles] = useState<undefined | string | string[]>(id)

	const FillterProduct = product.filter((items) => {
		if (!vehicles) {
			return items
		}
		return items.category === +vehicles
	})
	return (
		<>
			<Head>
				<link rel="canonical" href="https://sttkm.uz/SpecVehicles" />
			</Head>
			<Mainlayout title="| Vehicles">
				<h1 className={classes.veh_h1}>Спецтехника</h1>
				<div className={classes.spec_menu}>
					<div className="container">
						<div className={classes.spec}>
							<div
								className={
									'row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center'
								}
							>
								{category?.map((item) => (
									<div className={`col ${classes.spec_col}`} key={item.name}>
										<span
											className={classes.spec_title}
											onClick={() => setVehicles(item.id.toString())}
										>
											{item.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className={classes.vehicles_list}>
					<div className="container">
						<div className="row">
							{FillterProduct?.map((item) => (
								<Zoom
									triggerOnce={true}
									delay={250}
									key={item.id}
									className={`col-md-6 col-lg-4 ${classes.veh_col}`}
								>
									<Vehiclescard
										name={item?.name}
										id={item.id}
										image={item?.image}
									/>
								</Zoom>
							))}
						</div>
					</div>
				</div>
			</Mainlayout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const category = (await (
		await axios(`${process.env.API_URL}/api/stc`)
	).data.data) as specCategory
	const product = (await (
		await axios(`${process.env.API_URL}/api/st`)
	).data) as specVehicles

	if (!category && !product) {
		return { notFound: true }
	}

	return {
		props: {
			category,
			product,
		},
	}
}

export default Vehicles
