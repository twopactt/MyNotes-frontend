import { createListCollection, Input, Portal, Select } from '@chakra-ui/react'

const sortOrders = createListCollection({
	items: [
		{ label: 'Сначала новые', value: 'desc' },
		{ label: 'Сначала старые', value: 'asc' },
	],
})

function Filters({ filter, setFilter }) {
	return (
		<div className='flex flex-col gap-3'>
			<h3 className='font-bold text-xl'>Фильтры</h3>
			<div className='flex flex-col gap-5'>
				<Input
					placeholder='Поиск'
					onChange={e => setFilter({ ...filter, search: e.target.value })}
				/>
				<Select.Root
					collection={sortOrders}
					onChange={e => setFilter({ ...filter, sortOrder: e.target.value })}
				>
					<Select.HiddenSelect />
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder='Сортировка' />
						</Select.Trigger>
						<Select.IndicatorGroup>
							<Select.ClearTrigger />
							<Select.Indicator />
						</Select.IndicatorGroup>
					</Select.Control>
					<Portal>
						<Select.Positioner>
							<Select.Content>
								{sortOrders.items.map(sortOrders => (
									<Select.Item item={sortOrders} key={sortOrders.value}>
										{sortOrders.label}
									</Select.Item>
								))}
							</Select.Content>
						</Select.Positioner>
					</Portal>
				</Select.Root>
			</div>
		</div>
	)
}

export default Filters
