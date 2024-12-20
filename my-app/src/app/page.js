'use client'
import NoData from '../../../my-app/public/no-results.png'
import React, {useState} from 'react';
import {QRCodeCanvas} from 'qrcode.react'
import Image from "next/image";

const Page = () => {
    const [input, setInput] = useState('');

    const downloadButton = () => {
        let canvas = document.querySelector('canvas')
        let imageData = canvas.toDataURL('image/png')
        let el = document.createElement('a')
        el.href = imageData
        el.download= `${input}-QR-code`
        el.click()
    }


    return (
        <div className="px-5 h-screen flex flex-col items-center justify-center">
            <div className="lg:w-[40%] md:w-[60%] sm:w-full w-full mx-auto p-5 rounded shadow-lg bg-white">
                <div>
                    <h1 className="text-center text-[24px] font-bold mb-5 text-teal-500">QR-Code Generator</h1>
                    <input className="px-[10px] py-[5px] w-full mb-10 rounded border border-gray-300 focus:outline-teal-500"
                           placeholder="qr-code Generator"
                           type="url"
                           value={input}
                           onChange={(e) => setInput(e.target.value)}
                    />

                    {
                        input.length === 0 ? (
                            <>
                                <Image  src={NoData} alt="no data"
                                        className="w-[200px] h-[200px] mx-auto"
                                />
                            </>
                        ) :(
                            <>
                                <div>
                                    <QRCodeCanvas value={input} className="mx-auto"/>
                                </div>
                                <div className="text-center">
                                    <button type={"button"} className="px-10 py-2 mt-10 bg-teal-500 rounded"
                                            onClick={downloadButton}
                                    >Download</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Page;