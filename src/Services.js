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
            <div className="icons-container">
                <h3>Our Books</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZexRYve7e39-JvKg3-wjMOPmbiKHW3vG1w&usqp=CAU" alt="books" className="image-icons" />
                <br></br>
                <p>Search for a book in our Library Collection and reserve one today</p>
                <button>Our Books</button>
            </div>
            <div className="icons-container">
                <h3>Our Spaces</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzN9uZbNOmtVqKhIRY4Vlc1gd1fwhAo_ZeQ&usqp=CAU" alt="spaces" className="image-icons" />
                <br></br>
                <p>You can now book a physical space for you and/or your group</p>
                <button>Our Spaces</button>
               
            </div>
            <div className="icons-container">
                <h3>Our Periodicals</h3>
                <img src="https://images.unsplash.com/photo-1523249322636-7defc1f0c35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyaW9kaWNhbHMlMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="spaces" className="image-icons" />
                <br></br>
                <p>Get indepth knowledge with our featured periodicals books</p>
                <button>Our Spaces</button>
               
            </div>

            </div>
            <h1>Our Books</h1>
            <div className="books-card">
            {books.map(book => (
                <div className="book-item">
                    <p className="book-title">Title: {book.title}</p>
                    <img  className="book-image" src={book.image} alt="my books" />
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p className="abstract">Abstract: {book.abstract}</p>
                    <p>Language: {book.language}</p>
                    <p>No Available: {book.available_books}</p>
                    <button>Reserve a Book</button>
                </div>

            
                
            ))}
            </div>
            <h1>Our Spaces</h1>

            <div className="books-card">
            {spaces.map(space => (
                <div className="book-item">
                  
                    <img  className="book-image" src={space.image} alt="my books" />
                    <p>{space.space_type}</p>
                    <p>Location: {space.location}</p>
                    <p>Capacity: {space.capacity}</p>
                    <button>Book a Space</button>
                    
                </div>
                
            ))}
            </div>

            <h1>Periodicals</h1>

            <div className="books-card">
            {periodicals.map(periodical => (
                <div className="book-item">
                    <img  className="book-image" src={periodical.image} alt="my books" />
                    <p>Title: {periodical.title}</p>
                    <p>Editor: {periodical.editor}</p>
                    <p  className="abstract">Description: {periodical.description}</p>
                    <p>Genre: {periodical.genre}</p>
                    <button>Reserve a book</button>
                </div>
                
            ))}
            </div>
        </>    
    )
}

export default Services;