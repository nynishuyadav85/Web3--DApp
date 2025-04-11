import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const AirDrop = () => {

    const wallet = useWallet();
    const { connection } = useConnection()

    async function sendAirDrop() {
        const amount = document.getElementById("useramount").value
        console.log(amount)
        await connection.requestAirdrop(wallet.publicKey, amount * 100000000)
    }
    return (
        <div>
            <input id='useramount' type='number' placeholder='Amount'></input>
            <button onClick={sendAirDrop}>Send AirDrop</button>
            <h3>Hi Nishu your public key is {wallet.publicKey?.toString()}</h3>
        </div>
    )
}

export default AirDrop