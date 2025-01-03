import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newNumber, setNewNumber] = useState('')

  const [newName, setNewName] = useState('')

  const [checkFilter, setCheckFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // Validate name and number inputs
    if (!/^[a-zA-Z\s]*$/.test(newName)) {
      alert('Please enter only alphabetic characters for the name')
      return
    }

    if (!/^\d*$/.test(newNumber)) {
      alert('Please enter only numeric characters for the number')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    // Check if the name already exists
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewNumber('')
      setNewName('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setCheckFilter(event.target.value)
  }

  const Filter = ({ persons, checkFilter }) => {
    const filteredPersons = checkFilter
      ? persons.filter(person => person.name.toLowerCase().includes(checkFilter.toLowerCase()))
      : []

    return (
      <div>
        {filteredPersons.map(person => (
          <div key={person.name}>
            <p>{person.name} {person.number}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Filter</h2>
      <input value={checkFilter} onChange={handleFilter}/>
      <Filter persons={persons} checkFilter={checkFilter}/>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div key={person.name}>
            <p>{person.name} {person.number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App