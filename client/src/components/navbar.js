import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { GetGlobalProps } from '../context';
export const Navbar = () => {
  const hamburger = useState(false);
  const {connectWallet} = GetGlobalProps();

  return (
    <nav className='w-full py-4 px-4 text-[#dddddd] flex justify-between items-center text-[16px] md:text-[18px]'>
        <div className='cursor-pointer font-bold'>
            E-wallet
        </div>
        <div className={'text-[#dddddd] md:flex justify-between items-center gap-8 ' + (hamburger ? 'hidden' : 'flex flex-col')}>
            <div className='cursor-pointer'>Market</div>
            <div className='cursor-pointer'>Exchange</div>
            <div className='cursor-pointer'>Tutorial</div>
            <div className='cursor-pointer'>Wallets</div>
            <button className='cursor-pointer white-glassmorphism px-2 py-2 rounded-md duration-200' onClick={async()=>{
              await connectWallet();
            }}>Connect To Wallet</button>
        </div>
    </nav>
  )
}
