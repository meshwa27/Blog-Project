import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Navbar() {
  const user=JSON.parse(localStorage.getItem("userData"))

  const handleDelete=()=>{
    axios.delete(`${import.meta.env.VITE_BASEURL}/notes/deleteallnotes`,{
      withCredentials:true
    })
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
     
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>

        <Link to="/Blog" className="navbar-brand font-weight-bold">
          Notes
        </Link>

        <Link to="/create-notes" className="navbar-brand font-weight-bold">
          Create Notes
        </Link>

      </div>
    </nav>
  );
}
