import { Card, Heading, Text } from '@chakra-ui/react'
import moment from 'moment/moment'

function Note({ title, description, createdAt }) {
	return (
		<Card.Root variant={'subtle'}>
			<Card.Header>
				<Heading size={'md'}>{title}</Heading>
			</Card.Header>
			<Card.Body>
				<Text>{description}</Text>
			</Card.Body>
			<Card.Footer>
				{moment(createdAt).format('DD/MM/YYYY hh:mm:ss')}
			</Card.Footer>
		</Card.Root>
	)
}

export default Note
