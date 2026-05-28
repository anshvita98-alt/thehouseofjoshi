import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type WalletKind = "metamask" | "walletconnect" | "coinbase";

type WalletState = {
  address: string | null;
  kind: WalletKind | null;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  connect: (k: WalletKind) => Promise<void>;
  disconnect: () => void;
  connecting: WalletKind | null;
  error: string | null;
};

const Ctx = createContext<WalletState | null>(null);

export function useWallet() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useWallet must be used within WalletProvider");
  return c;
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [kind, setKind] = useState<WalletKind | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [connecting, setConnecting] = useState<WalletKind | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hoj.wallet");
      if (saved) {
        const p = JSON.parse(saved);
        setAddress(p.address); setKind(p.kind);
      }
    } catch {}
  }, []);

  const persist = (a: string | null, k: WalletKind | null) => {
    if (a && k) localStorage.setItem("hoj.wallet", JSON.stringify({ address: a, kind: k }));
    else localStorage.removeItem("hoj.wallet");
  };

  const connect = useCallback(async (k: WalletKind) => {
    setError(null); setConnecting(k);
    try {
      if (k === "metamask") {
        const eth = (typeof window !== "undefined" ? (window as any).ethereum : null);
        if (!eth) throw new Error("MetaMask not detected. Please install the MetaMask extension.");
        const accounts: string[] = await eth.request({ method: "eth_requestAccounts" });
        const addr = accounts?.[0];
        if (!addr) throw new Error("No account returned");
        setAddress(addr); setKind("metamask"); persist(addr, "metamask");
      } else if (k === "coinbase") {
        const eth = (typeof window !== "undefined" ? (window as any).ethereum : null);
        if (eth?.isCoinbaseWallet) {
          const accounts: string[] = await eth.request({ method: "eth_requestAccounts" });
          const addr = accounts?.[0];
          if (addr) { setAddress(addr); setKind("coinbase"); persist(addr, "coinbase"); }
        } else {
          throw new Error("Coinbase Wallet not detected. Install the Coinbase Wallet extension or open in the Coinbase app.");
        }
      } else if (k === "walletconnect") {
        throw new Error("WalletConnect requires the full SDK. Please connect via MetaMask Mobile or scan from a WalletConnect-compatible wallet (coming soon).");
      }
      setOpen(false);
    } catch (e: any) {
      setError(e?.message ?? "Connection failed");
    } finally {
      setConnecting(null);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null); setKind(null); persist(null, null);
  }, []);

  return (
    <Ctx.Provider value={{ address, kind, isOpen, open: () => setOpen(true), close: () => setOpen(false), connect, disconnect, connecting, error }}>
      {children}
    </Ctx.Provider>
  );
}
