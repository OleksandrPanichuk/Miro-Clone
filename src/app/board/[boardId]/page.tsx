import { Room } from '@/components/common'
import { Canvas, Loading } from '@/components/screens/board'

interface IBoardIdPageProps {
	params: {
		boardId: string
	}
}

const BoardIdPage = ({ params }: IBoardIdPageProps) => {
	return (
		<Room roomId={params.boardId} fallback={<Loading />}>
			<Canvas boardId={params.boardId} />
		</Room>
	)
}

export default BoardIdPage
