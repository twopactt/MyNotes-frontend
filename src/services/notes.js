import axios from 'axios'
import config from './config'

export const fetchNotes = async filter => {
	try {
		var response = await axios.get(`${config.api.baseUrl}/notes`, {
			params: {
				search: filter?.search,
				sortItem: filter?.sortItem,
				sortOrder: filter?.sortOrder,
			},
		})

		return response.data.notes
	} catch (e) {
		console.error(e)
	}
}

export const createNote = async note => {
	try {
		var response = await axios.post(`${config.api.baseUrl}/notes`, note)

		return response.status
	} catch (e) {
		console.error(e)
	}
}
