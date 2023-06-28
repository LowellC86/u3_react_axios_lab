import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { useParams, Link } from "react-router-dom"

const StarshipPage = (props) => {

//setting our state for data to be pulled

let location = useLocation()
let starship = location.state.starship



return(
  <div className="starship">
    <h1>{starship.name}</h1>
    
  </div>
)
}

export default StarshipPage