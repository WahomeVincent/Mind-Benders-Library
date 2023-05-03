import React  from "react";
import { useState,useEffect } from "react";


function Services() {
    const [books , setBooks] = useState([])
    const [spaces, setSpaces] = useState([])
    const [periodicals, setPeriodicals] = useState([])

    useEffect(() => {
            fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
        }, []);
   
    useEffect(() => {
            fetch('http://localhost:3000/space')
            .then(res => res.json())
            .then(data => setSpaces(data))
        }, []);

    useEffect(() => {
            fetch('http://localhost:3000/periodicals')
            .then(res => res.json())
            .then(data => setPeriodicals(data))
        }, []);

    return(
        <>
            <h1>Services</h1>
            <div className="icons">
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZexRYve7e39-JvKg3-wjMOPmbiKHW3vG1w&usqp=CAU" alt="books" className="image-icons" />
                <br></br>
                <button>Our Books</button>
            </div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzN9uZbNOmtVqKhIRY4Vlc1gd1fwhAo_ZeQ&usqp=CAU" alt="spaces" className="image-icons" />
                <br></br>
                <button>Our Spaces</button>
               
            </div>
            <div >
                <img src="https://images.unsplash.com/photo-1523249322636-7defc1f0c35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyaW9kaWNhbHMlMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="spaces" className="image-icons" />
                <br></br>
                <button>Our Spaces</button>
               
            </div>

            </div>
            <h1>Our Books</h1>
            <div className="books-card">
            {books.map(book => (
                <div >
                    <p>{book.title}</p>
                    <img  className="book-image" src={book.image} alt="my books" />
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p className="abstract">{book.abstract}</p>
                    <p>{book.language}</p>
                    <p>{book.available_books}</p>
                </div>

            
                
            ))}
            </div>
            <h1>Our Spaces</h1>

            <div className="books-card">
            {spaces.map(space => (
                <div >
                  
                    <img  className="book-image" src={space.image} alt="my books" />
                    <p>{space.space_type}</p>
                    <p>{space.location}</p>
                    
                    <p>{space.capacity}</p>
                    
                </div>
                
            ))}
            </div>

            <h1>Periodicals</h1>

            <div className="books-card">
            {periodicals.map(periodical => (
                <div >
                    <img  className="book-image" src={periodical.image} alt="my books" />
                    <p>{periodical.title}</p>
                    <p>{periodical.editor}</p>
                    <p  className="abstract">{periodical.description}</p>
                    <p>{periodical.genre}</p>
                    
                </div>
                
            ))}
            </div>
        </>    
    )
}

export default Services;