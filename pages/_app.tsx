import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { Chain } from '@wagmi/core'

export const joc = {
  id: 10081,
  name: 'Japan Open Chain (Testnet)',
  network: 'Japan Open Chain (Testnet)',
  nativeCurrency: {
    decimals: 18,
    name: 'Japan Open Chain Testnet',
    symbol: 'JOC',
  },
  rpcUrls: {
    public: { http: ['https://rpc-2.testnet.japanopenchain.org:8545'] },
    default: { http: ['https://rpc-1.testnet.japanopenchain.org:8545'] },
  },
  blockExplorers: {
    etherscan: { name: 'Japan Open Chain (Testnet)', url: 'https://explorer.testnet.japanopenchain.org/' },
    default: { name: 'Japan Open Chain (Testnet)', url: 'https://explorer.testnet.japanopenchain.org/' },
  },
  contracts: {
    multicall3: {
      address: '0x914e5D06d4fc0856C09aE99d47B21124a3B4bC0B',
      // blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain


const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    joc,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});


const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
