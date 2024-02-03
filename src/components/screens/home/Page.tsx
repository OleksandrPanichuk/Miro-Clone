"use client"
import { useOrganization } from '@clerk/nextjs'
import { BoardList, EmptyOrg } from '.'

export const Page = ({searchParams}: {
	searchParams: {
		search?: string
		favorites?: string
	}
}) => {
	const { organization } = useOrganization()

	return (
		<div className='flex-1 h-[calc(100%-80px)] p-6'>
			{!organization ? (
				<EmptyOrg />
			) : (
				<BoardList orgId={organization.id} query={searchParams} />
			)}
		</div>
	)
}
