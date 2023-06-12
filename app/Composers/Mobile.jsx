'use client'
import { useState } from 'react'
// import Data from "./Data"
const mobile = [
    {
        id: 1,
        title: "Iphone 14/14plus",
        img: "mo1.jpeg",
        price: "Just 35000/-"
    },
    {
        id: 2,
        title: "Vivo T1",
        img: "mo4.jpeg",
        price: "Just 35000/-"
    },
    {
        id: 3,
        title: "Moto E13",
        img: "mo3.jpeg",
        price: "Just 35000/-"
    },
    {
        id: 4,
        title: "Infinix Hot 10s",
        img: "mo2.jpeg",
        price: "Just 35000/-"
    },
]

const Post = (props) => {
    let [ayush,setAyush]=useState(0)
    const handlePlus=()=>ayush<mobile.length -1? setAyush(ayush +=1) :setAyush(0)
    // const handlePlus=()=>ayush<Data.length -1? setAyush(ayush +=1) :setAyush(0)
    const handelMinus =()=>(ayush>0)?setAyush(ayush -=1) :setAyush(mobile.length -1)
    // const handelMinus =()=>(ayush>0)?setAyush(ayush -=1) :setAyush(Data.length -1)
    return (
        <>
            <div className="col-3 text-center">
            <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="card px-5 flex flex-col items-center justify-center border-none" >
                    <img src={props.img} className="card-img-top py-5" style={{ height: '350px' }} alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title h5">{props.title}</h5>
                        <p className="card-text fw-bolder text-primary">{props.price}</p>
                    </div>
                </div>
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
                
            </div>
        </>
    )
}

const MobieData = () => {
    return (
        <>
            <div className="row ">
                {mobile.map((mobile) => <Post img={mobile.img} title={mobile.title} price={mobile.price} />)}
            </div>
        </>
    )
}
function Mobile() {
    return (
        <>
            <div className="container my-3 bg-light">
                <div className="row border border-1 py-2">
                    <div className="col-2 text-light flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/0b22f4bdbe5b032a.jpg?q=90')", backgroundPosition: "0px bottom" }}>
                        <h1 className="display-6 ">Top Offers</h1>
                        <a href="#" class="btn btn-primary mt-5">Go somewhere</a>
                    </div>

                    <div className="col-8">
                        <MobieData/>
                    </div>

                    <div className="col-2">
                        <img src="wa1.jpeg" className="card-img-top" style={{ height: '450px' }} alt="..." />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobile