'use client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const data=[
    {id:1,img:"car1.jpg"},
    {id:2,img:"car2.jpg"},
    {id:3,img:"car3.jpeg"},
    {id:4,img:"car4.jpeg"},
]
function Carousel() {
    let [ayush,setAyush]=useState(0)
    const handlePlus=()=>ayush<data.length -1? setAyush(ayush +=1) :setAyush(0)
    const handelMinus =()=>(ayush>0)?setAyush(ayush -=1) :setAyush(data.length -1)
    return (
        <>
            <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={data[ayush].img} className="d-block w-100" alt="..." style={{height:"350px"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" onClick={handelMinus} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" onClick={handlePlus} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel