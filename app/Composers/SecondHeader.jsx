import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const catData = [
    {
        id: 1,
        img: "cat/1.png",
        category: "Electronic",
    },
    {
        id: 2,
        img: "cat/2.png",
        category: "Mobiles",
    },
    {
        id: 3,
        img: "cat/3.png",
        category: "Fashion",
    },
    {
        id: 4,

        img: "cat/4.png",
        category: "Home",
    },
    {
        id: 5,

        img: "cat/5.png",
        category: "Grocery",
    },
    {
        id: 6,
        img: "cat/6.png",
        category: "Electronic",
    },
    {
        id: 7,
        img: "cat/7.png",
        category: "Mobiles",
    },
    {
        id: 8,
        img: "cat/8.png",
        category: "Fashion",
    },
    {
        id: 9,

        img: "cat/9.png",
        category: "Home",
    },
    {
        id: 10,

        img: "cat/10.png",
        category: "Grocery",
    },
    {
        id: 11,
        img: "mo2.jpeg",
        category: "Home",
    },
    {
        id: 12,
        img: "mo2.jpeg",
        category: "Grocery",
    },
]
const Product = (props) => {
    return (
        <>
            <div className="col-1">
                <div className="card pt-2 border-none hover:bg-slate-200">
                    <div className="row g-0 mx-auto flex flex-col items-center justify-center ">
                        <img src={props.img} className="img-fluid rounded" style={{ height: "50px", width: "50px" }} />
                        <div className="card-body">
                            <h5 className="card-category capitalize  fs-5">{props.category}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function SecondHeader() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row px-5">
                    {catData.map((v) => <Product category={v.category} img={v.img} />)}
                </div>
            </div>
        </>
    )
}

export default SecondHeader