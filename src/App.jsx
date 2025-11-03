import './App.css'
import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { createNote, fetchNotes } from './services/notes'
import { ColorModeButton } from './components/ui/color-mode'

function App() {
	const [notes, setNotes] = useState([])
	const [filter, setFilter] = useState({
		search: '',
		sortItem: '',
		sortOrder: 'asc',
	})

	useEffect(() => {
		const fetchData = async () => {
			let notes = await fetchNotes(filter)
			setNotes(notes)
		}

		fetchData()
	}, [filter])

	const onCreate = async note => {
		await createNote(note)
		let notes = await fetchNotes(filter)
		setNotes(notes)
	}

	return (
		<div>
			<div className='fixed top-3 right-3 z-10'>
				<ColorModeButton />
			</div>
			<section className='p-8 flex flex-row justify-start items-start gap-12'>
				<div className='flex flex-col w-1/3 gap-10'>
					<CreateNoteForm onCreate={onCreate} />
					<Filters filter={filter} setFilter={setFilter} />
				</div>
				<div className='flex flex-col w-1/2 gap-3'>
					<h3 className='font-bold text-xl'>Мои заметки</h3>
					<ul className='flex flex-col gap-5'>
						{notes.map(x => (
							<li key={x.id}>
								<Note
									title={x.title}
									description={x.description}
									createdAt={x.createdAt}
								/>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	)
}

export default App
