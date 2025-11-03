import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

function CreateNoteForm({ onCreate }) {
	const [note, setNote] = useState()

	const onSubmit = e => {
		e.preventDefault()
		setNote(null)
		onCreate(note)
	}

	return (
		<form onSubmit={onSubmit} className='w-full flex flex-col gap-3'>
			<h3 className='font-bold text-xl'>Создание заметки</h3>
			<Input
				placeholder='Название'
				value={note?.title ?? ''}
				onChange={e => setNote({ ...note, title: e.target.value })}
			/>
			<Textarea
				placeholder='Описание'
				value={note?.description ?? ''}
				onChange={e => setNote({ ...note, description: e.target.value })}
			/>
			<Button
				type='submit'
				className='bg-teal-500 hover:bg-teal-600 text-white font-bold'
			>
				Создать
			</Button>
		</form>
	)
}

export default CreateNoteForm
