const Goods = ({person, title, handleDelete}) => {
    
    return (
        <div>
           {person.map((persons)=>{
               return(
                    <div className='persons' key={persons.id}>
                        <h3 style ={{color: '#fcfc'}}>{persons.name}</h3>
                        <h4>{persons.location}</h4>
                        <button onClick={handleDelete}>Click me</button>
                        {/* {console.log(persons.name)} */}
                    </div>
                    )})}

                    <p>{title}</p>
        </div>
    )
}

export default Goods



    
   