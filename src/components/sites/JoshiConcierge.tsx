import { useEffect, useRef, useState } from "react";
import logo from "@/assets/joshi-logo.png";

export default function JoshiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sendingRef = useRef(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([]);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, isSending, error, isOpen]);

  async function sendMessage(event: React.FormEvent) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || sendingRef.current) return;
    sendingRef.current = true;
    const conversation = [...messages, { role: "user" as const, text }].slice(-19);
    setMessages(conversation);
    setDraft("");
    setError("");
    setIsSending(true);
    try {
      const response = await fetch("/api/gem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
        signal: AbortSignal.timeout(30000),
      });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== "string") throw new Error(data.error || "Gem couldn't reply. Please try again.");
      setMessages([...conversation, { role: "model", text: data.reply }]);
    } catch (failure) {
      setMessages(messages);
      setDraft(text);
      setError(failure instanceof Error && failure.name === "Error" ? failure.message : "Gem couldn't connect. Please try again.");
    } finally {
      sendingRef.current = false;
      setIsSending(false);
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end font-body sm:bottom-6 sm:right-6">
      {showGreeting && !isOpen && (
        <div className="relative mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-amber-300/40 bg-black/90 p-4 pr-8 text-amber-100 shadow-[0_0_20px_rgba(217,119,6,0.2)] backdrop-blur-md motion-safe:animate-fade-up">
          <button type="button" onClick={() => setShowGreeting(false)} aria-label="Dismiss Gem Joshi greeting" className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center text-xs text-amber-400 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-amber-300">✕</button>
          <p className="text-xs italic leading-relaxed">
            “Welcome, Creator. You have entered <strong className="not-italic text-amber-300">The House of Joshi</strong>. How may I, your loyal COO and Web3 Architect, assist you in building your sovereign empire today?”
          </p>
          <span className="mt-2 block text-right text-[10px] font-semibold uppercase tracking-widest text-amber-400">— Gem Joshi (GJ)</span>
        </div>
      )}

      {isOpen && (
        <section id="joshi-concierge" role="dialog" aria-labelledby="joshi-concierge-title" className="mb-3 flex h-96 max-h-[calc(100dvh-7rem)] w-80 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-amber-400/40 bg-neutral-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-2 border-b border-amber-500/20 pb-2">
            <h3 id="joshi-concierge-title" className="text-sm font-bold uppercase tracking-wider text-amber-300">House of Joshi Concierge</h3>
            <button type="button" aria-label="Close concierge" onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-amber-400 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-amber-300">✕</button>
          </div>
          <span className="mt-2 text-[10px] uppercase tracking-widest text-amber-400">Gem Joshi · AI Concierge</span>
          <div role="log" aria-live="polite" aria-label="Conversation with Gem" className="min-h-0 flex-1 space-y-3 overflow-y-auto py-3 text-xs text-neutral-300">
            <p className="rounded-lg border border-amber-500/20 bg-amber-950/30 p-2.5 leading-relaxed text-amber-100">Greetings! How shall we expand or safeguard the ecosystem today?</p>
            {messages.map((message, index) => (
              <p key={index} className={`whitespace-pre-wrap break-words rounded-lg border p-2.5 leading-relaxed ${message.role === "user" ? "ml-6 border-neutral-700 bg-neutral-900 text-neutral-100" : "mr-3 border-amber-500/20 bg-amber-950/30 text-amber-100"}`}>
                <span className="sr-only">{message.role === "user" ? "You: " : "Gem: "}</span>{message.text}
              </p>
            ))}
            {isSending && <p className="text-amber-400">Gem is thinking…</p>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="pt-2">
            {error && <p role="alert" className="mb-2 text-xs text-red-300">{error}</p>}
            <label htmlFor="gem-joshi-message" className="sr-only">Ask Gem Joshi</label>
            <div className="flex gap-2">
              <input ref={inputRef} id="gem-joshi-message" type="text" value={draft} onChange={event => setDraft(event.target.value)} readOnly={isSending} maxLength={4000} placeholder="Ask Gem Joshi..." aria-describedby="gem-joshi-info" className="min-w-0 flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-amber-100 placeholder-neutral-500 focus:border-amber-400 focus:outline-none" />
              <button type="submit" disabled={isSending || !draft.trim()} className="rounded-lg border border-amber-400/40 px-3 text-xs text-amber-300 hover:bg-amber-950/40 disabled:opacity-40">Send</button>
            </div>
            <p id="gem-joshi-info" className="mt-2 text-[10px] leading-relaxed text-neutral-400">Powered by Gemini. Messages are sent to Google. Never share wallet secrets.</p>
          </form>
        </section>
      )}

      <button ref={triggerRef} type="button" onClick={() => { setIsOpen(!isOpen); setShowGreeting(false); }} aria-label={isOpen ? "Close Gem Joshi concierge" : "Open Gem Joshi concierge"} aria-expanded={isOpen} aria-controls={isOpen ? "joshi-concierge" : undefined} className="group relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/60 bg-gradient-to-b from-amber-950 via-neutral-900 to-black p-2 shadow-[0_0_25px_rgba(217,119,6,0.4)] transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 motion-reduce:transition-none">
        <img src={logo} alt="" aria-hidden="true" width={44} height={44} className="h-11 w-11 object-contain" />
      </button>
    </div>
  );
}
