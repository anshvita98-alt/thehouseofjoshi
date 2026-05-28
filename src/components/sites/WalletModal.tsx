import { useWallet } from "./WalletProvider";
import { X } from "lucide-react";

const wallets = [
  { id: "metamask" as const, name: "MetaMask", desc: "Connect with the most popular Web3 wallet.", icon: "🦊" },
  { id: "walletconnect" as const, name: "WalletConnect", desc: "Scan with any WalletConnect-compatible wallet.", icon: "🔗" },
  { id: "coinbase" as const, name: "Coinbase Wallet", desc: "Connect using the Coinbase Wallet extension.", icon: "🪙" },
];

export function WalletModal() {
  const { isOpen, close, connect, connecting, error } = useWallet();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={close} />
      <div className="relative w-full max-w-md glass-strong rounded-2xl p-8 gold-glow">
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-muted-foreground hover:text-primary transition"><X size={20} /></button>
        <div className="text-center mb-6">
          <div className="text-xs tracking-[0.3em] text-primary mb-2">SOVEREIGN ACCESS</div>
          <h3 className="font-display text-2xl">Connect Your Wallet</h3>
          <p className="text-sm text-muted-foreground mt-2">Choose a provider to enter the ecosystem.</p>
        </div>
        <div className="space-y-3">
          {wallets.map(w => (
            <button
              key={w.id}
              onClick={() => connect(w.id)}
              disabled={!!connecting}
              className="w-full text-left rounded-xl border border-primary/20 bg-white/[0.02] hover:bg-primary/10 hover:border-primary/60 transition p-4 flex items-center gap-4 disabled:opacity-60"
            >
              <span className="text-2xl">{w.icon}</span>
              <span className="flex-1">
                <span className="block font-medium">{w.name}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{w.desc}</span>
              </span>
              {connecting === w.id && <span className="text-xs text-primary">Connecting…</span>}
            </button>
          ))}
        </div>
        {error && <div className="mt-4 text-xs text-red-300/90 bg-red-900/20 border border-red-500/30 rounded-lg p-3">{error}</div>}
        <p className="mt-6 text-[11px] text-muted-foreground/70 text-center">By connecting, you agree to the House of Joshi Terms & Privacy Policy.</p>
      </div>
    </div>
  );
}
