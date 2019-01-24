import React from 'react'

class Book extends React.Component {
  render(){
   const imageURL = this.props.imageLinks.thumbnail || this.props.imageLinks.smallThumbnail
   return (
     <li>
       <div className="book">
         <div className="book-top">
           <div className="book-cover" style={{
               width: 128,
               height: 193,
               backgroundImage: `url("${imageURL}")`
             }}></div>
           <div className="book-shelf-changer">
             <select value={this.props.shelf}>
               <option value="none" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">{this.props.title}</div>
         {this.props.author && this.props.author.map((author, index)=>(
           <div className="book-authors" key={index}>
            {author}
           </div>
         ))}
       </div>
     </li>
   )
 }
}

export default Book
