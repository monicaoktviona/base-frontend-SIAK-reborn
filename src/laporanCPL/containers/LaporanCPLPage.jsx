/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import LaporanTable from "../components/LaporanTable";
const LaporanCPLPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	dataLaporanCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, dataLaporanCPL: true}))
			} finally {
				setIsLoading(prev => ({...prev, dataLaporanCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Data Laporan CPL"}
	singularName={"Laporan"}
	items={[]}
	isLoading={isLoading.dataLaporanCPL}
>
	<LaporanTable
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanCPLPage

