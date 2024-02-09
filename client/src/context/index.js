import React, {useState, useEffect, createContext, useContext} from 'react';
import {ethers, parseEther} from 'ethers';
import { contractAddress, contactAbi } from "../constants";
import { toast } from 'react-toastify';
const transactionContext = createContext();
const { ethereum } = window;

const createTransactionContract = async() => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contactAbi, signer);
    return transactionContract;
}

export const Txprovider = ({children})=>{
    
    const [currentAccount, setCurrentAccount] = useState("");

    const isWalletConnected = async() => {
        try{
            if(!ethereum){
                toast('🦄 Please Install Metamask!', {
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
            
            const accounts = await ethereum.request({method: "eth_accounts"});
        
            if(accounts.length > 0){
                setCurrentAccount(accounts[0]);
                // getAllTransactions();
            }
            else{
                console.log('No accounts found');
            }
        } catch(err){
            console.log(err);
        }
    }


    const getAllTransactions = async()=>{
        try{
            if(!ethereum){
                toast('🦄 Please Install Metamask!', {
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
            const txContract = await createTransactionContract();
            const availableTransactions = await txContract.getAllTx();
            const transactions = availableTransactions.map((tx) => {
                return {
                    addressTo: tx.from,
                    addressFrom: tx.to,
                    timestamp: tx.timestamp.toString(),
                    message: tx.message,
                    keyword: tx.keyword,
                    amount: parseInt(tx.amount.toString()) / (10 ** 18)
                }
            })
            return transactions
        } catch(err){
            console.log(err);
        }
    }

    const connectWallet = async()=>{
        try{
            if(!ethereum){
                toast('🦄 Please Install Metamask!', {
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
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);
        } catch(err){
            console.log(err);
        }
    }

    const sendTx = async(addressTo, amount, keyword, message)=>{
        if(!ethereum){
            toast('🦄 Please Install Metamask!', {
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
        
        const idx = toast.loading('Loading.....please wait')
        
        try{
            const txContract = await createTransactionContract();
            const parsedAmount = ethers.parseEther(amount);
            let account = await ethereum.request({method: "eth_accounts"});
            account = account[0];
            await ethereum.request({
                method: 'eth_sendTransaction',
                params:[{
                    from: account,
                    to: addressTo,
                    gas: '0x5208', // 21000 gwei
                    value: parsedAmount.toString(16)
                }]
            })
            const txHash = await txContract.addToBlockChain(addressTo, parsedAmount, message, keyword);
            await txHash.wait();
            toast.update(idx, {render: `Task Successfull`, type: 'success', isLoading: false, autoClose: 5000});
        }
        catch(err){
            toast.update(idx, {render: `${err.message}`, type: 'error', isLoading: false, autoClose: 5000})
        }
    }
    return (<transactionContext.Provider value={{
        connectWallet,
        currentAccount,
        sendTx,
        getAllTransactions
    }}>
        {
            children
        }
    </transactionContext.Provider>)
}

export const GetGlobalProps = (()=>{
    return useContext(transactionContext);
})