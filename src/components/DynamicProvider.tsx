import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

export default function DynamicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicContextProvider
      settings={
        {
          environmentId: import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID || "",
          walletConnectors: [
            EthereumWalletConnectors,
            ZeroDevSmartWalletConnectors,
          ],
          /* 
          Account Abstraction configuration for ZeroDev.
          This enables gasless transactions by linking your ZeroDev project.
        */
          accountAbstraction: {
            connectors: [
              {
                type: "zerodev",
                projectId: import.meta.env.VITE_ZERODEV_PROJECT_ID || "",
                projectIds: {
                  "43113": import.meta.env.VITE_ZERODEV_PROJECT_ID || "",
                },
                kernelVersion: "v3",
                accountType: "kernel",
                entryPointVersion: "v0.7", // Critical for Kernel v3 compatibility with Paymaster
                sponsorUserOperation: true,
              },
            ],
            defaultToSmartAccount: true,
            shouldShowSmartWalletOnly: true, // Force UI to only use Smart Wallet
            targets: ["43113"], // Apply this to Avalanche Fuji
            onTransactionRequested: () => {
              return true;
            },
            onSimulationRequested: () => true,
          },
          embeddedWallets: {
            hideTransactionConfirmation: true,
          },
          hideEmbeddedWalletUIs: true,
          hideEmbeddedWalletTransactionUIs: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
    >
      {children}
    </DynamicContextProvider>
  );
}
