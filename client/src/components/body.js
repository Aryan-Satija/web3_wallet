import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { GetGlobalProps } from '../context';
export const Body = () => {
    const [formData, setFormData] = useState({
        addressTo : "",
        amount : "",
        keyword : "",
        message: ""
    });

    const {sendTx} = GetGlobalProps();
    const handleChange = (event) => {
        setFormData((prev)=>{
            return {
                ...prev,
                [event?.target?.name]: event?.target?.value
            }
        })
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        if(formData.addressTo === "" || formData.amount === "" || formData.keyword === "" || formData.message === ""){
            console.log("2");
            toast('🦄 All fields are mandatory!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        await sendTx(formData.addressTo, formData.amount, formData.keyword, formData.message);
    }
    return (
    <div className='py-[4rem] px-[2rem] flex flex-col items-center justify-between w-[500px] mx-auto'>
        <div className='min-h-[80vh] flex flex-col gap-8'>
            <div className='text-[40px] font-special'>
                BUY AND SELL 
                <br/>
                ETHEREUM
            </div>
            <div className='text-gradient font-special'>
                Explore the crypto world. buy and sell crypto coins easily,
                <br/>
                trusted cryptoon to be your crypto market prtner.
            </div>
            <div>
                <button className='bg-sky-500 p-2 rounded-sm blue-glassmorphism text-white duration-500 hover:bg-sky-700'>
                    Let's get started
                </button>
            </div>
            <div className='grid grid-rows-2 grid-flow-col text-white'>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 rounded-tl-md text-center'>Reliability</div>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 rounded-bl-md text-center'>Security</div>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 text-center'>Ethereum</div>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 text-center'>Web 3.0</div>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 rounded-tr-md text-center'>Low fees</div>
                <div className='border p-8 text-[24px] text-gradient font-special border-blue-300 rounded-br-md text-center'>Blockchain</div>
            </div>
        </div>
        <div className='w-full flex flex-col'> 
            <div> 
                <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='addressTo' className='text-gradient font-special cursor-pointer'>Address to:</label>
                        <input onChange={(event)=>{
                            handleChange(event);
                        }} type='text' id='addressTo' name='addressTo' className='w-full white-glassmorphism rounded-sm p-2 text-gradient text-[18px] font-special outline-none'/>
                    </div>
                    <div>
                        <label htmlFor='amount' className='text-gradient font-special cursor-pointer'>Amount:</label>
                        <input onChange={(event)=>{
                            handleChange(event);
                        }} type='number' id='amount' name='amount' step='0.1' className='w-full white-glassmorphism rounded-sm p-2 text-gradient text-[18px] font-special outline-none'/>
                    </div>
                    <div>
                        <label htmlFor='keyword' className='text-gradient font-special cursor-pointer'>Keyword:</label>
                        <input onChange={(event)=>{
                            handleChange(event);
                        }} type='text' id='keyword' name='keyword' className='w-full white-glassmorphism rounded-sm p-2 text-gradient text-[18px] font-special outline-none'/>
                    </div>
                    <div>
                        <label htmlFor='message' className='text-gradient font-special cursor-pointer'>Message:</label>
                        <input onChange={(event)=>{
                            handleChange(event);
                        }} type='text' id='message' name='message' className='w-full white-glassmorphism rounded-sm p-2 text-gradient text-[18px] font-special outline-none'/> 
                    </div>
                    <div className='w-full h-[1px] bg-white'>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button className='bg-sky-500 p-2 rounded-sm blue-glassmorphism text-white duration-500 hover:bg-sky-700'>Send Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
