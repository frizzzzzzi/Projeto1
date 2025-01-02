import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123'}
  ])

  const [newNumber, setNewNumber] = useState('')

  const [newName, setNewName] = useState('')

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

  return (
    <div>
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