import Goods from './Goods';
import {useState} from 'react';


const Products = () => {
    const [person, setPerson]= useState(
                            [
                                {name: 'sandalson', age: 19, location: 'Delta', id: 2},
                                {name: 'Abigail', age: 20, location: 'Abuja', id: 3},
                                {name: 'Mickey', age: 2, location: 'China', id: 4}
                            ])

    const handleDelete = (id)=>{
        const newPerson = person.filter(person => person.id !== id);
            setPerson(newPerson)
            console.log(newPerson)
        }

   const [name, setName]= useState('John')
    const btnClick = (e) => {
        setName('Sandalson')
        console.log('I am fine', name);
    };


    return (
        <div>
            <div className="products">
                <Goods person={person} title = 'Eggs Frozen food' handleDelete={handleDelete}/>
                {/* <Goods person={person.filter((blog)=> blog.name === 'Abigail')} title = 'Blogs' /> */}
                <h2>{name}</h2>
               
            </div>
        </div>
    )
}

export default Products
