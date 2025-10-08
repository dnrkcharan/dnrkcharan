import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { profile } from "../data/profile";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const knowledgeBase = [
  {
    question: "who is charan",
    answer:
      "Dasari Narada Rama Krishna Charan is a Hyderabad-based software engineer building AI-powered products that merge finance, data and machine learning."
  },
  {
    question: "experience",
    answer:
      "Charan has 3+ years of experience leading backend, frontend and ML initiatives at Golden Hills Capital and Cogoport."
  },
  {
    question: "skills",
    answer:
      "Core skills include Python, TypeScript, FastAPI, React, GraphQL, Pandas, ML Ops, Selenium automation and cloud deployments."
  },
  {
    question: "projects",
    answer:
      "Recent highlights: IPO/FO return prediction models, Crypto Insights Platform, Email Classification System, EV Smart Scheduling."
  },
  {
    question: "contact",
    answer: `You can reach Charan at ${profile.contact.email} or schedule time via ${profile.contact.calendar}.`
  }
];

export const AiChatbot = () => {
  const [open, setOpen] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi there! I'm Charan's AI copilot. Ask me about his experience, projects, or how to get in touch."
    }
  ]);
  const [message, setMessage] = useState("");

  const fallback = useMemo(
    () =>
      "I couldn't quite decode that. Try asking about experience, skills, projects or contact details!",
    []
  );

  const handleSend = () => {
    if (!message.trim()) return;
    const userMessage = message.trim();
    const response =
      knowledgeBase.find((item) => userMessage.toLowerCase().includes(item.question))?.answer || fallback;

    setConversation((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: response }
    ]);
    setMessage("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-charan-secondary to-charan-accent shadow-glow"
        animate={{ scale: open ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="h-6 w-6 text-charan-dark" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-40 w-full max-w-sm rounded-3xl border border-white/10 bg-charan-dark/95 p-6 shadow-2xl backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">AI Copilot</p>
                <h4 className="font-semibold text-white">Ask me anything about Charan</h4>
              </div>
            </div>
            <div className="mb-4 max-h-64 space-y-3 overflow-y-auto pr-2 text-sm">
              {conversation.map((entry, index) => (
                <div
                  key={`${entry.sender}-${index}`}
                  className={`flex ${entry.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`inline-block max-w-[85%] rounded-2xl px-4 py-2 leading-relaxed ${
                      entry.sender === "user"
                        ? "bg-charan-secondary/60 text-white"
                        : "bg-white/10 text-white/90"
                    }`}
                  >
                    {entry.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about experience, projects, skills..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                onClick={handleSend}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-charan-accent text-charan-dark shadow-glow"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
