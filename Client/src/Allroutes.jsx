import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import BlogCreat from './Pages/BlogCreat'
import Blog from './Pages/Blog'
import BlogUpdate from './Pages/BlogUpdate'


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create-notes" element={<BlogCreat />}></Route>

         <Route path="/Blog" element={
          <Blog />
          }></Route> 
          <Route path="/update/:id" element={<BlogUpdate />} />
         
        {/* <Route path="/singlenote/:notesId" element={<NotesDetail />}></Route>
       
        <Route path="/getallnotes" element={<GetAllNotes />}></Route>  */}
    </Routes>
  )
}

export default Allroutes
