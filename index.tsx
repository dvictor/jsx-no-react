import {JSX} from "./jsx"

interface Customer {
	id: number
	name: string
	location: string
}

const init = async() => {
	//You can load data with await here. For this demo, we just define a constant
	const data: Customer[] = [
		{
			id: 3,
			name: 'John Doe',
			location: 'Chicago'
		},
		{
			id: 4,
			name: 'Jane Smith',
			location: 'Baltimore'
		},
		{
			id: 33,
			name: 'Linda Foo',
			location: 'New York'
		}
	]

	// adding event callbacks is easy
	const showDetails = (id: number) => {
		const dest = document.getElementById('details')

		dest.replaceChildren() // empty the destination

		// JSX tags are rendered as DOM elements or fragments
		dest.appendChild(<>
			<h3>Details</h3>
			<div>Customer {id} details...</div>
		</> as Node)
	}

	return <div class="hello">
		<table>
			<tbody>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Location</th>
			</tr>
			{data.map(row => <tr>
				<td>{row.id}</td>
				<td>{row.name}</td>
				<td>{row.location}</td>
				<td><input type="button" value="Details" onclick={() => showDetails(row.id)}/></td>
			</tr>)}
			</tbody>
		</table>
		<div id="details"/>
	</div>
}

// application entrypoint
export const main = (() => {
	return init().then(el => document.body.append(el as Node))
})()