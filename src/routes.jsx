import { useRoutes } from "react-router-dom";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import semesterRoutes from "@/semester/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import programStudiRoutes from "@/programStudi/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import kelasRoutes from "@/kelas/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...penilaianKelasRoutes, 
	...semesterRoutes, 
	...kurikulumRoutes, 
	...programStudiRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...pembayaranRoutes, 
	...mataKuliahRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...kelasRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
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
