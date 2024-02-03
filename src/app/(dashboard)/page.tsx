


import { Page} from '@/components/screens/home'


export const dynamic = 'force-dynamic'
interface DashboardPageProps {
	searchParams: {
		search?: string
		favorites?: string
	}
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
	return <Page searchParams={searchParams} />
}

export default DashboardPage
