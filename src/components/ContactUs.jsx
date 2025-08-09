import React from 'react'

const ContactUs = () => {
  return (
    <div className='items-center h-auto'>
        <div className='bg-[#4a224a] h-[101vh] flex flex-col items-center'>
            <h1 className='text-amber-300 text-5xl font-bold pt-10'>
                Contact Us
            </h1>
            <p className='text-white text-xl mb-5 pt-5 px-80 text-center'>
                Get in touch with us today — we're here to help. 
            </p>
            {/* <button className='text-black text-2xl bg-amber-300 border-0 rounded-lg p-2 mt-5' >Contact Us</button> */}
        
            {/* <h2 className="text-3xl text-white font-bold mt-5 mb-4">What Can We Do For You?</h2>
            <p className="text-[16px] text-white leading-[29px] font-medium mb-2">If you have any questions or need assistance, feel free to contact us and send us a message.</p> */}
            <form className='flex flex-col'>
                <div className="flex flex-row w-[90%]">
                    <input placeholder="Name" required="" className="bg-white rounded-lg pt-2 pb-2 pr-7 pl-5 m-2" type="text"/>

                    <input placeholder="Phone" required="" className="bg-white rounded-lg pt-2 pb-2 pr-7 pl-5 m-2" type="text"/>    
                </div>
                        <input placeholder="Email" required="" className="bg-white rounded-lg pt-2 pb-2 pr-5 pl-5 m-2" type="email"/>
                        
                        <textarea placeholder="Messages" required="" className="bg-white rounded-lg pt-2 pb-2 pr-5 pl-5 m-2"/>
                        
                        <div className="flex items-center gap-2 my-4 mx-16"><span className="bg-white rounded-sm px-5 py-1">5 + 9 ?</span>
                            <input required="" className="bg-white rounded-sm px-5 py-1" type="text" value=""/>
                            <button type="button" className="shadow-4xl text-2xl flex items-center content-center">
                                🔄
                            </button>
                        </div>
                        <button type="submit" className="bg-amber-300 rounded-lg p-3 m-2">
                            Submit Now
                        </button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs
