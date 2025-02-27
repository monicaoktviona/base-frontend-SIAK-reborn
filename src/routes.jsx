import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import cPLRoutes from "@/cPL/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import kelasRoutes from "@/kelas/routes";
import semesterRoutes from "@/semester/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import programStudiRoutes from "@/programStudi/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...cPLRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...kelasRoutes, 
	...semesterRoutes, 
	...mataKuliahRoutes, 
	...programStudiRoutes, 
	...pembayaranRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...kurikulumRoutes, 
	...penilaianKelasRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
