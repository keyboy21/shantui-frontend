import FactoryCard from '@/components/FactoryCard/FactoryCard'
import Mainlayout from '@/components/Layout/Mainlayout'
import { Factory } from '@/interface/Data'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import classes from './factories.module.css'

type props = {
	data: Factory[]
}

const Factories: FC<props> = ({ data }) => {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://sttkm.uz/Factory" />
			</Head>
			<Mainlayout title="| Factory">
				<h1 className={classes.fac_h1}>Заводы</h1>
				<div className={classes.factory_list}>
					<div className="container">
						<div className="row">
							{data.map((item) => (
								<div
									className={`col-md-6 col-lg-4 ${classes.factory_col}`}
									key={item.id}
								>
									<FactoryCard
										id={item.id}
										name={item.name}
										image={item.image}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Mainlayout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await axios(`${process.env.API_URL}/api/f`)
	const data = res.data.data as Factory[]

	if (!data) {
		return { notFound: true }
	}

	return {
		props: {
			data,
		},
	}
}

export default Factories
