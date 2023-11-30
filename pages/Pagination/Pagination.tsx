import axios from 'axios'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import MainLayout from '../../components/Layout/Mainlayout'
import { specVehicles } from '../../interface/Data'
import UsePagination from './UsePagination'
import classes from './pagination.module.css'

const BuldozerCard = dynamic(
	() => import('../../components/Buldozer/BuldozerCard'),
	{
		loading: () => (
			<div className="card" aria-hidden="true">
				<Image
					src="/MaskGroupbuldozer.png"
					className="card-img-top"
					width={200}
					height={200}
					alt="Buldozer"
				/>
				<div className="card-body">
					<h5 className="card-title placeholder-glow">
						<span className="placeholder col-6" />
					</h5>
					<button
						tabIndex={-1}
						className="btn btn-primary disabled placeholder col-6"
					/>
				</div>
			</div>
		),
		ssr: false,
	},
)

type props = {
	data: specVehicles[]
}

const Pagination: FC<props> = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(16)
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
	const howManyPages = Math.ceil(data.length / postsPerPage)

	return (
		<MainLayout title="Все виды спецтехники">
			<div className={classes.pagination}>
				<div className="container">
					<div className="row">
						{currentPosts.map((post) => (
							<Zoom
								triggerOnce={true}
								delay={300}
								key={post.id}
								className={`col-md-6 col-lg-3 ${classes.pagin_col}`}
							>
								<BuldozerCard
									id={post.id}
									name={post?.name}
									image={post?.image}
								/>
							</Zoom>
						))}
					</div>
					<UsePagination pages={howManyPages} setCurrentPage={setCurrentPage} />
				</div>
			</div>
		</MainLayout>
	)
}

export async function getServerSideProps() {
	const res = await axios(`${process.env.API_URL}/api/st/`)
	const data = res.data as specVehicles[]

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data,
		},
	}
}

export default Pagination
