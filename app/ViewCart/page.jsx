'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function page() {
    let [product, setPro] = useState(1)

    return (
        <>
            <div className="w-10/12 mx-auto flex gap-5 mb-5 mt-3">
                <div className="w-8/12 rounded border border-slate-300">
                    <div className="flex px-5 py-3 rounded justify-center item-center text-center bg-white ">
                        <div className="flex-1">
                            <span className="text-blue-500 border-b-2 border-blue-500 text-xl fs-5 py-3">Flipkart (1)</span>
                        </div>
                        <div className="flex-1">
                            <span className="text-xl fs-5 py-3">Grocery</span>
                        </div>
                    </div>
                    <div className="flex px-5 rounded justify-center py-3 item-center bg-white mt-2">
                        <div className="flex-1">
                            <span className="py-3 text-sm fw-semibold">From saved Address</span>
                        </div>
                        <div className="flex-1 text-right">
                            <button className="bg-white px-3 py-2 rounded border hover:shadow-md text-sm text-blue-700 font-semibol fw-semibold"> Enter Delivery Pincode</button>
                        </div>
                    </div>
                    <div className="flex flex-1 px-5 rounded justify-between py-3 item-center bg-white mt-2 gap-10 ">
                        <div className="flex-[0.3] flex-col flex gap-4">
                            <Image src="/mo1.jpeg" width={100} height={100} />
                            <div className="flex justify-around gap-1">
                                <button className="boder rounded-full border w-7 text-lg font-bold border-black" onClick={() => setPro((product > 0) ? (product -= 1) : (product = 0))}>-</button>
                                <input type="text" value={product} className="w-8 text-center border text-lg font-bold border-black rounded" />
                                <button className="boder rounded-full border w-7 text-lg font-bold border-black" onClick={() => setPro(product += 1)}>+</button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col w-96">
                                <p className="fw-semibold fs-5 truncate  hover:text-blue-500">Atomberg Renesa 5 Star BEE Rated 5 Star 1200 mm my name is safadsfsad</p>
                                <p className="fs-6 text-slate-400">Ivory & Black, Pack of 1</p>
                                <p className="fs-6 text-slate-400">Seller:PLACERO INTERNATIONAL PRIVATE LIMITED</p>
                            </div>
                            <div className="flex-1 mt-3 flex flex-col">
                                <p>Delivery by Thu Jun 13 | Fress</p>
                                <div className="flex flex-row gap-10">
                                    <p className="fw-bold"><del className="text-slate-400">₹{product * 37000}</del> ₹{product * 35000}</p>
                                    <p className="text-green-600 fw-bolder truncate">{100 - (product * 35000) / (product * 37000) * 100}% off</p>
                                </div>
                            </div>
                            <div className="flex-1 mt-3 flex flex-row gap-10">
                                <button className="fw-semibold hover:text-blue-500">SAVE FOR LATER</button>
                                <button className="fw-semibold hover:text-blue-500" onClick={() => setPro(product = 0)}>REMOVE</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 px-5 border shadow-lg border-slate-500 justify-between py-3 item-center bg-white  gap-10">
                    <div className="flex-1 justify-right insert-y-0 right-0	">
                    <div className="flex "> 
                        <button className="bg-orange-600 px-5 py-3 text-light fw-bold">PLACE ORDER</button>
                    </div>
                </div>
                    </div>
                </div>
                <div className="w-4/12 py-2">
                    <div className="flex px-3 py-3 border border-slate-700  justify-center item-center  bg-white flex-col">
                        <div className="flex-1">
                            <span className="py-5 fw-semibold text-slate-500">PRICE DETAILS</span>
                        </div>
                        </div>
                        <div className="flex px-3 py-3  justify-center item-center  bg-white flex-col">

                        <div className="  flex flex-1 justify-between   item-center ">
                            <div className="flex">
                                <span className="text-lg py-2">Price ({product} items)</span>
                            </div>
                            <div className="flex">
                                <span className="text-lg py-2">₹{product*35000}</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-between   item-center ">
                            <div className="flex">
                                <span className="text-lg py-2">Discount</span>
                            </div>
                            <div className="flex">
                                <span className="text-lg text-green-600 py-2">-₹{(product * 37000) - (product * 35000)}</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-between   item-center ">
                            <div className="flex">
                                <span className="text-lg py-2">Delivery Charges</span>
                            </div>
                            <div className="flex">
                                <span className="text-lg text-green-600 py-2">Free</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-center text-slate-400  item-center ">
                            <div className="flex">
                                <span className="text-lg py-2 ">----------------------------------------------------</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-between fw-semibold  item-center ">
                            <div className="flex">
                                <span className="text-lg ">Total ₹{product*35000}</span>
                            </div>
                            <div className="flex">
                                <span className="text-lg text-green-600 ">₹{product*35000}</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-center text-slate-400  item-center ">
                            <div className="flex">
                                <span className="text-lg ">----------------------------------------------------</span>
                            </div>
                        </div>
                        <div className="  flex flex-1 justify-between fw-semibold  item-center ">
                            <div className="flex">
                                <span className="text-lg  text-green-600">You will save ₹{(product * 37000) - (product * 35000)} on this order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page