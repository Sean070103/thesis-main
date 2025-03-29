"use client";

import * as React from "react";
import { WagmiProvider, http } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider as RKProvider,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";

// Initialize QueryClient
const queryClient = new QueryClient();

// Replace this with your actual WalletConnect project ID
const projectId = "your-project-id";

// Configure chains for the app
const chains = [mainnet, polygon, optimism, arbitrum] as const;

// Create config using RainbowKit's getDefaultConfig
const config = getDefaultConfig({
  appName: "FundChain",
  projectId,
  chains,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
  ssr: true, // If you need SSR support
});

export function RainbowKitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RKProvider>{children}</RKProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
