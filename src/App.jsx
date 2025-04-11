import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import './App.css'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import AirDrop from './AirDrop'

function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/YOGg5RV2dtrnvzQuYNSRwwYb8AiOnBUv"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <AirDrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
