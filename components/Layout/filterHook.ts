import axios from 'axios'
import { useState, useTransition } from 'react'
import { specVehicles } from '../../interface/Data'

const FilterHook = () => {
	const [visible, setvisible] = useState<boolean>(false)
	const [productName, setproductName] = useState<specVehicles[]>([])
	const [filteredName, setFilteredName] = useState<specVehicles[]>([])
	const [pending, startTransition] = useTransition()

	const getData = () => {
		axios
			.get<specVehicles[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/st`)
			.then((res) => setproductName(res.data))
			.catch((err) => console.log(err))
	}

	const startfilter = (value: string) => {
		if (!productName.length) {
			getData()
		}
		startTransition(() => {
			const filteringName = productName?.filter((product) => {
				return product.name.toLowerCase().includes(value?.toLowerCase())
			})
			setFilteredName(filteringName)
		})
	}

	return { filteredName, pending, visible, setvisible, startfilter }
}

export default FilterHook
