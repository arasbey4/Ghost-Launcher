import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from '@/types/game'
import './AIPage.scss'

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 'm-1', from: 'ghost', text: 'Merhaba! Bugün sana nasıl yardımcı olabilirim?' }
]

const QUICK_PROMPTS = ['Sistemimi analiz et', 'Performans önerisi al', 'Oyun öner']

function ghostReply(prompt: string): string {
  const lower = prompt.toLowerCase()
  if (lower.includes('fps') || lower.includes('cyberpunk')) {
    return 'Sistemini analiz ettim. RTX 5070 ve Ryzen 9 ile: Ultra ayarlarda 85-95 FPS, DLSS Quality ile 120-130 FPS. Önerim: DLSS Quality + Ray Tracing Medium.'
  }
  if (lower.includes('analiz')) {
    return 'Sistemin analiz edildi: CPU %45, GPU %62, RAM 12.4GB kullanımda. Her şey yolunda görünüyor! Arka plan uygulamalarını kapatırsan +%8 performans kazanabilirsin.'
  }
  if (lower.includes('performans')) {
    return 'Performans önerilerim: 1) GPU sürücünü güncelle, 2) Windows Oyun Modunu aç, 3) Gölge kalitesini Medium yap. Bu ayarlarla ortalama +15 FPS kazanırsın.'
  }
  if (lower.includes('öner')) {
    return 'Kütüphanene göre önerilerim: Elden Ring (60GB) ve Hades II. Son oynadığın oyunlara bakılırsa aksiyon RPG seviyorsun!'
  }
  return 'Anladım! Bu konuda sana yardımcı olabilirim. Detay verirsen sistemine özel bir öneri hazırlayabilirim.'
}

export function AIPage(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text: string): void => {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `g-${Date.now()}`, from: 'ghost', text: ghostReply(trimmed) }
      ])
      setTyping(false)
    }, 1200)
  }

  const reset = (): void => {
    setMessages(INITIAL_MESSAGES)
    setTyping(false)
  }

  return (
    <div className="page ai-page">
      <div className="ai-page__chat glass-card">
        <div className="ai-page__header">
          <h2>🤖 Ghost AI Asistan</h2>
          <div className="ai-page__header-actions">
            <button onClick={reset} aria-label="Yenile">
              🔄
            </button>
            <button onClick={() => setMessages([])} aria-label="Temizle">
              🗑️
            </button>
          </div>
        </div>

        <div className="ai-page__messages">
          {messages.map((message) => (
            <div key={message.id} className={`ai-page__message ai-page__message--${message.from}`}>
              <span className="ai-page__message-author">
                {message.from === 'ghost' ? 'Ghost' : 'Sen'}
              </span>
              <p>{message.text}</p>
            </div>
          ))}
          {typing && (
            <div className="ai-page__message ai-page__message--ghost">
              <span className="ai-page__message-author">Ghost</span>
              <p className="ai-page__typing">
                Ghost yazıyor<span>.</span>
                <span>.</span>
                <span>.</span>
              </p>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="ai-page__quick">
          {QUICK_PROMPTS.map((prompt) => (
            <button key={prompt} onClick={() => send(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <form
          className="ai-page__input"
          onSubmit={(event) => {
            event.preventDefault()
            send(input)
          }}
        >
          <input
            type="text"
            value={input}
            placeholder="Mesajını yaz..."
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" aria-label="Gönder">
            ➤
          </button>
        </form>
      </div>
    </div>
  )
}
