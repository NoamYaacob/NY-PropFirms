"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Sparkles, ExternalLink } from "lucide-react";
import { WA } from "@/lib/whatsapp";
import {
  BOT_CONFIG,
  QUICK_ACTIONS,
  generateBotResponse,
} from "@/lib/aiChatKnowledge";

// ── Types ─────────────────────────────────────────────────────────────
interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  chips?: string[];
  buttons?: Array<{ label: string; action: string }>;
}

type EscalationStep = "none" | "form" | "submitted";

interface LeadData {
  name: string;
  phone: string;
  need: string;
  interest: string;
}

// ── Formatted text (handles **bold** and \n line breaks) ──────────────
function FormattedText({ text }: { text: string }) {
  return (
    <div>
      {text.split("\n").map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: "0.3rem" }} />;
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
          </p>
        );
      })}
    </div>
  );
}

// ── Typing indicator ───────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex justify-end mb-3">
      <div
        className="flex gap-1.5 items-center px-4 py-3 rounded-2xl rounded-tr-none"
        style={{
          backgroundColor: "var(--surface-overlay)",
          border: "1px solid var(--surface-border)",
          borderRight: "3px solid var(--teal-400)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full animate-bounce"
            style={{
              backgroundColor: "var(--teal-400)",
              animationDelay: `${i * 180}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Single message bubble ──────────────────────────────────────────────
function MessageBubble({
  msg,
  onChip,
  onAction,
}: {
  msg: ChatMessage;
  onChip: (text: string) => void;
  onAction: (action: string) => void;
}) {
  const isBot = msg.role === "bot";
  return (
    <div className={`flex mb-3 ${isBot ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
          isBot ? "rounded-tr-none" : "rounded-tl-none"
        }`}
        style={
          isBot
            ? {
                backgroundColor: "var(--surface-overlay)",
                border: "1px solid var(--surface-border)",
                borderRight: "3px solid var(--teal-400)",
                color: "var(--text-primary)",
              }
            : {
                backgroundColor: "rgba(82,181,240,0.1)",
                border: "1px solid rgba(82,181,240,0.2)",
                color: "var(--text-primary)",
              }
        }
      >
        <FormattedText text={msg.text} />

        {/* Action buttons (escalation CTAs) */}
        {msg.buttons && msg.buttons.length > 0 && (
          <div className="flex flex-col gap-2 mt-3">
            {msg.buttons.map((btn) => (
              <button
                key={btn.action}
                onClick={() => onAction(btn.action)}
                className="text-right text-xs rounded-lg px-3 py-2 w-full transition-opacity hover:opacity-75 active:opacity-60"
                style={
                  btn.action === "lead_form"
                    ? {
                        backgroundColor: "rgba(82,181,240,0.12)",
                        border: "1px solid var(--teal-edge)",
                        color: "var(--teal-400)",
                      }
                    : btn.action === "whatsapp_group"
                    ? {
                        backgroundColor: "rgba(37,211,102,0.1)",
                        border: "1px solid rgba(37,211,102,0.3)",
                        color: "#25D366",
                      }
                    : {
                        backgroundColor: "var(--surface-raised)",
                        border: "1px solid var(--surface-border)",
                        color: "var(--text-secondary)",
                      }
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Quick chips */}
        {msg.chips && msg.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {msg.chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onChip(chip)}
                className="text-xs rounded-full px-2.5 py-1 transition-colors hover:border-[var(--teal-edge)] hover:text-[var(--text-secondary)]"
                style={{
                  backgroundColor: "var(--surface-raised)",
                  border: "1px solid var(--surface-border-strong)",
                  color: "var(--text-muted)",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Lead capture form ─────────────────────────────────────────────────
function LeadForm({
  data,
  onChange,
  onSubmit,
  isSubmitting,
}: {
  data: LeadData;
  onChange: (d: LeadData) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const fieldStyle: React.CSSProperties = {
    backgroundColor: "var(--surface-overlay)",
    border: "1px solid var(--surface-border)",
    color: "var(--text-primary)",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    direction: "rtl",
  };

  return (
    <div
      className="shrink-0 px-4 py-4 border-t"
      style={{ borderColor: "var(--surface-border)" }}
    >
      <p
        className="text-xs font-semibold mb-3"
        style={{ color: "var(--text-secondary)" }}
      >
        השאירו פרטים ונועם יחזור אליכם
      </p>
      <div className="space-y-2.5">
        <input
          placeholder="שם *"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          style={fieldStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = "var(--teal-edge)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "var(--surface-border)")
          }
        />
        <input
          placeholder="טלפון / ווטסאפ *"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          style={fieldStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = "var(--teal-edge)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "var(--surface-border)")
          }
        />
        <input
          placeholder="מה אתה צריך? (לא חובה)"
          value={data.need}
          onChange={(e) => onChange({ ...data, need: e.target.value })}
          style={fieldStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = "var(--teal-edge)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "var(--surface-border)")
          }
        />

        {/* Interest selector */}
        <div>
          <p
            className="text-xs mb-1.5"
            style={{ color: "var(--text-muted)" }}
          >
            מסלול מעניין?
          </p>
          <div className="flex gap-2 flex-wrap">
            {["EOD", "Intraday", "לא בטוח"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange({ ...data, interest: opt })}
                className="text-xs rounded-full px-2.5 py-1 transition-colors"
                style={{
                  backgroundColor:
                    data.interest === opt
                      ? "rgba(82,181,240,0.15)"
                      : "var(--surface-raised)",
                  border: `1px solid ${
                    data.interest === opt
                      ? "var(--teal-edge)"
                      : "var(--surface-border)"
                  }`,
                  color:
                    data.interest === opt
                      ? "var(--teal-400)"
                      : "var(--text-muted)",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={isSubmitting || !data.name.trim() || !data.phone.trim()}
          className="w-full rounded-lg py-2.5 text-sm font-semibold transition-opacity disabled:opacity-40"
          style={{
            backgroundColor: "var(--teal-400)",
            color: "var(--surface-base)",
          }}
        >
          {isSubmitting ? "שולח..." : "שלח ←"}
        </button>
      </div>
    </div>
  );
}

// ── Floating button icon ───────────────────────────────────────────────
function AIChatFloatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={BOT_CONFIG.buttonTooltip}
      title={BOT_CONFIG.buttonTooltip}
      className="fixed z-[100] bottom-20 right-4 md:bottom-6 md:right-6 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]"
      style={{
        width: "52px",
        height: "52px",
        background:
          "linear-gradient(135deg, var(--teal-500) 0%, var(--teal-400) 100%)",
        boxShadow:
          "0 4px 16px rgba(82,181,240,0.35), 0 2px 8px rgba(0,0,0,0.35)",
      }}
    >
      <Sparkles size={22} color="white" aria-hidden="true" />
    </button>
  );
}

// ── Main widget ────────────────────────────────────────────────────────
export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "bot",
      text: BOT_CONFIG.greeting,
      chips: QUICK_ACTIONS as unknown as string[],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [escalationStep, setEscalationStep] = useState<EscalationStep>("none");
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    phone: "",
    need: "",
    interest: "לא בטוח",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Recommendation multi-step flow
  const [recStep, setRecStep] = useState(0);
  const [recAnswers, setRecAnswers] = useState<Record<string, string>>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Open with animation
  const openPanel = useCallback(() => {
    setIsOpen(true);
    // Double rAF ensures the element is painted before transitioning in
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setPanelVisible(true))
    );
    setTimeout(() => inputRef.current?.focus(), 320);
  }, []);

  // Close with animation
  const closePanel = useCallback(() => {
    setPanelVisible(false);
    setTimeout(() => setIsOpen(false), 280);
  }, []);

  // Append a bot message
  const addBotMessage = useCallback(
    (msg: Omit<ChatMessage, "id" | "role">) => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "bot", ...msg },
      ]);
    },
    []
  );

  // Recommendation flow state machine
  const handleRecFlow = useCallback(
    (answer: string) => {
      const newAnswers = { ...recAnswers };

      if (recStep === 1) {
        newAnswers.budget = answer;
        setRecAnswers(newAnswers);
        setRecStep(2);
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage({
            text: "שאלה שנייה: איזה גודל חשבון מעניין אותך כרגע?",
            chips: ["25K", "50K", "100K", "150K", "לא בטוח עדיין"],
          });
        }, 520);
        return;
      }

      if (recStep === 2) {
        newAnswers.accountSize = answer;
        setRecAnswers(newAnswers);
        setRecStep(3);
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage({
            text: "שאלה שלישית: יש לך ניסיון קודם במסחר?",
            chips: ["כן, יש לי ניסיון", "קצת", "חדש לגמרי"],
          });
        }, 520);
        return;
      }

      if (recStep === 3) {
        newAnswers.experience = answer;
        setRecAnswers(newAnswers);
        setRecStep(4);
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage({
            text: "שאלה אחרונה: אתה מעדיף מסלול עם חוקים פשוטים וברורים, או גמיש יותר?",
            chips: ["פשוט וברור", "גמיש ודינמי", "לא בטוח"],
          });
        }, 520);
        return;
      }

      if (recStep === 4) {
        newAnswers.preference = answer;
        setRecStep(0);
        setRecAnswers({});

        const isExperienced = newAnswers.experience === "כן, יש לי ניסיון";
        const prefersSimple =
          newAnswers.preference === "פשוט וברור" ||
          newAnswers.experience === "חדש לגמרי";
        const prefersFlexible = newAnswers.preference === "גמיש ודינמי";

        let recText: string;
        if (prefersSimple && !prefersFlexible) {
          recText =
            "ברמה כללית, **EOD** נשמע כמו ההתאמה הטובה יותר עבורך.\n\nהמסלול פשוט יותר לניהול — הרף מתאפס בסוף כל יום ואין צורך לעקוב אחריו בזמן אמת.\n\nאם תרצה, אפשר לעבור לנועם לפרטים אישיים.";
        } else if (isExperienced && prefersFlexible) {
          recText =
            "ברמה כללית, **Intraday** עשוי להתאים לך יותר.\n\nמתאים לסוחרים שמורגלים בניהול פוזיציה שוטף. שים לב: הרף הנגרר פועל בזמן אמת ודורש מודעות גבוהה.\n\nאם תרצה, אפשר לעבור לנועם לפרטים אישיים.";
        } else {
          recText =
            "קשה לי להמליץ בוודאות על סמך מה שספרת — יש כאן שיקולים אישיים שחשוב לקחת בחשבון.\n\nעדיף שנועם יעזור להתאים בדיוק.";
        }

        setTimeout(() => {
          setIsTyping(false);
          addBotMessage({
            text: recText,
            buttons: [
              { label: "אני רוצה שנועם יחזור אליי", action: "lead_form" },
              { label: "להמשיך לשאול את הבוט", action: "continue" },
            ],
          });
        }, 700);
      }
    },
    [recStep, recAnswers, addBotMessage]
  );

  // Send a message (user text or chip click)
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "user", text: trimmed },
      ]);
      setInput("");
      setIsTyping(true);

      // Route to recommendation flow when active
      if (recStep > 0) {
        handleRecFlow(trimmed);
        return;
      }

      // Standard response generation
      const delay = 600 + Math.random() * 350;
      setTimeout(() => {
        setIsTyping(false);
        const resp = generateBotResponse(trimmed, {
          messageCount: messages.length,
        });
        addBotMessage({
          text: resp.text,
          chips: resp.chips,
          buttons: resp.buttons,
        });
        if (resp.startRecommendation) {
          setRecStep(1);
        }
      }, delay);
    },
    [isTyping, recStep, messages.length, handleRecFlow, addBotMessage]
  );

  // Handle action button clicks
  const handleAction = useCallback((action: string) => {
    if (action === "lead_form") {
      setEscalationStep("form");
    } else if (action === "whatsapp_group") {
      window.open(WA.GROUP, "_blank", "noopener,noreferrer");
    } else if (action === "whatsapp_direct") {
      window.open(WA.DIRECT, "_blank", "noopener,noreferrer");
    }
    // "continue" = no-op, user continues chatting
  }, []);

  // Submit lead
  const handleLeadSubmit = useCallback(async () => {
    if (!leadData.name.trim() || !leadData.phone.trim()) return;
    setIsSubmitting(true);

    const context = messages
      .slice(-8)
      .map((m) => `${m.role === "bot" ? "בוט" : "משתמש"}: ${m.text}`)
      .join("\n");

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          context,
          page: window.location.href,
          escalated: true,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Continue regardless — lead is also logged server-side
    }

    setEscalationStep("submitted");
    setIsSubmitting(false);
    addBotMessage({
      text: "תודה! העברתי את הפרטים שלך לנועם. הוא יחזור אליך בהקדם.\n\nבינתיים אפשר גם להצטרף לקבוצת הווטסאפ לעדכונים.",
      buttons: [{ label: "לקבוצת הווטסאפ", action: "whatsapp_group" }],
    });
  }, [leadData, messages, addBotMessage]);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[190] md:hidden"
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
            transition: "opacity 280ms ease",
            opacity: panelVisible ? 1 : 0,
          }}
          onClick={closePanel}
          aria-hidden="true"
        />
      )}

      {/* Floating button (only when panel is closed) */}
      {!isOpen && <AIChatFloatButton onClick={openPanel} />}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed z-[200] inset-x-0 bottom-0 rounded-t-3xl
                     md:inset-x-auto md:bottom-6 md:right-6 md:w-[380px] md:rounded-2xl
                     flex flex-col"
          style={{
            height: "85vh",
            backgroundColor: "var(--surface-raised)",
            border: "1px solid var(--surface-border)",
            boxShadow:
              "0 -8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
            transition:
              "transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease",
            transform: panelVisible ? "translateY(0)" : "translateY(28px)",
            opacity: panelVisible ? 1 : 0,
          }}
          // Desktop height override via a data attr targeted in a style tag below
          data-aichat-panel="true"
          role="dialog"
          aria-modal="true"
          aria-label={BOT_CONFIG.fullName}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center justify-between gap-3 px-4 py-3.5 shrink-0 rounded-t-3xl md:rounded-t-2xl"
            style={{
              backgroundColor: "var(--surface-overlay)",
              borderBottom: "1px solid var(--surface-border)",
              borderTop: "3px solid var(--teal-500)",
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal-500), var(--teal-400))",
                }}
              >
                <Sparkles size={15} color="white" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p
                  className="font-semibold text-sm leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {BOT_CONFIG.fullName}
                </p>
                <p
                  className="text-xs leading-snug mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {BOT_CONFIG.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={closePanel}
              aria-label="סגור"
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors hover:bg-[var(--surface-border)]"
              style={{ color: "var(--text-muted)" }}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── Messages ── */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 min-h-0"
            style={{ overscrollBehavior: "contain" }}
          >
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                msg={msg}
                onChip={sendMessage}
                onAction={handleAction}
              />
            ))}
            {isTyping && <TypingDots />}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Lead form (replaces input when escalation triggered) ── */}
          {escalationStep === "form" && (
            <LeadForm
              data={leadData}
              onChange={setLeadData}
              onSubmit={handleLeadSubmit}
              isSubmitting={isSubmitting}
            />
          )}

          {/* ── Input area ── */}
          {escalationStep !== "form" && (
            <div
              className="shrink-0 px-3 py-3 flex gap-2 items-center rounded-b-3xl md:rounded-b-2xl"
              style={{
                borderTop: "1px solid var(--surface-border)",
                backgroundColor: "var(--surface-base)",
                paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="כתבו שאלה..."
                disabled={isTyping}
                className="flex-1 rounded-xl px-3 py-2 text-sm outline-none transition-colors disabled:opacity-50"
                style={{
                  backgroundColor: "var(--surface-raised)",
                  border: "1px solid var(--surface-border)",
                  color: "var(--text-primary)",
                  direction: "rtl",
                }}
                aria-label="כתבו שאלה לבוט"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                aria-label="שלח"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-85"
                style={{
                  backgroundColor: "var(--teal-400)",
                  color: "var(--surface-base)",
                  flexShrink: 0,
                }}
              >
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Desktop height override — can't use Tailwind md: with inline style */}
      <style>{`
        @media (min-width: 768px) {
          [data-aichat-panel] { height: 560px !important; max-height: 560px !important; }
        }
      `}</style>
    </>
  );
}

// ── Small inline "Ask AI" entry point for use inside page sections ────
export function AskAIChip({ question }: { question?: string }) {
  return (
    <button
      onClick={() => {
        // Dispatch a custom event that AIChatWidget can listen to
        window.dispatchEvent(
          new CustomEvent("ai-chat-open", {
            detail: { question: question ?? "" },
          })
        );
      }}
      className="inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 transition-colors hover:border-[var(--teal-edge)]"
      style={{
        backgroundColor: "var(--surface-overlay)",
        border: "1px solid var(--surface-border-strong)",
        color: "var(--teal-400)",
      }}
    >
      <Sparkles size={11} aria-hidden="true" />
      {question ? `שאל: "${question}"` : "שאל את הבוט"}
    </button>
  );
}
