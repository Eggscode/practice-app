

const Goods = () => {
    const person= [
        {name: 'sandalson', age: 19, location: 'Delta', id: 02},
        {name: 'Unwana', age: 20, location: 'Abuja', id: 03},
        {name: 'Abigail', age: 02, location: 'China', id: 04}
    ]
    return (
        <div>
           {person.forEach(persons => {
               <div className='persons' key={person.id}>
                   <h3>{persons.name}</h3>
                   <h4>{persons.location}</h4>
               </div>
           })}
        </div>
    )
}

export default Goods



    
   