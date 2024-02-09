import React, {useState, useEffect} from 'react';
import Spline from '@splinetool/react-spline';
import { GetGlobalProps } from '../context';
export const Transactions = () => {
    const [data, setData] = useState([]); 
    const {getAllTransactions} = GetGlobalProps();
    useEffect(()=>{
        (async()=>{
            console.log('loading...');
            const res = await getAllTransactions();
            setData(res);
        })();
    }, []);
    return (
        <div className='py-[4rem] w-[500px] flex flex-col mx-auto justify-center'>
            <div> 
                <h1 className='text-5xl font-special'>Connect your account to see the latest transactions</h1>
            </div>  
            <div className="flex flex-wrap justify-center items-center mt-10">
            {
                data.map((txData)=>{
                    return (<div className='text-blue-gradient font-special white-glassmorphism bg-slate-500 p-4 cursor-pointer'>
                        <Spline scene="https://prod.spline.design/h1SmFiH2CT0C3FmM/scene.splinecode" />
                        <div><span>from:</span> {txData.addressFrom}</div>
                        <div><span>to:</span> {txData.addressTo}</div>
                        <div><span>amount:</span> {txData.amount} eth</div>
                    </div>)
                })
            }
            </div>
        </div>
    )
}
