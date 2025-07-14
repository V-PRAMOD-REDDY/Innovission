import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2, ExternalLink, Phone } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  buttons?: Array<{
    text: string;
    action: string;
  }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: `Hi, I'm INNOVISSION Career Assistant 👋

I help you with:
Resume and LinkedIn Optimization
Portfolio Website Creation
Personal or Business Websites
Academic and Real-world Projects

What would you like to explore today? Click below or type your query.`,
      timestamp: new Date(),
      buttons: [
        { text: 'Resume/LinkedIn Help', action: 'resume' },
        { text: 'Portfolio Creation', action: 'portfolio' },
        { text: 'Website for Business or Personal', action: 'website' },
        { text: 'Project Support for Students', action: 'projects' },
        { text: 'View Pricing', action: 'pricing' },
        { text: 'Contact on WhatsApp', action: 'whatsapp' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: message.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: getBotResponse(message.trim()),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };
  

  const handleButtonClick = (action: string) => {
    const userMessage: Message = {
      type: 'user',
      content: getButtonText(action),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: getBotResponse(action),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const getButtonText = (action: string): string => {
    const texts: { [key: string]: string } = {
      'resume': 'Resume/LinkedIn Help',
      'portfolio': 'Portfolio Creation',
      'website': 'Website for Business or Personal',
      'projects': 'Project Support for Students',
      'pricing': 'View Pricing',
      'whatsapp': 'Contact on WhatsApp'
    };
    return texts[action] || action;
  };

  const getBotResponse = (input: string): string => {
    const msg = input.toLowerCase();
    

    if (input === 'resume' || msg.includes('resume') || msg.includes('linkedin')) {
      return `Resume and LinkedIn Assistance
Basic: ₹5-₹12
Premium: ₹25 Makeover plus Weekly Updates and Study Material
Ready to start? Message us on WhatsApp`;
    }

    if (input === 'portfolio' || msg.includes('portfolio')) {
      return `Portfolio Creation ₹49
Portfolio Website
PDF and Link
Mobile Ready
Job Updates and Interview Tips`;
    }

    if (input === 'website' || msg.includes('website')) {
      return `Website Development
Portfolio, Business, E-commerce, Blogs
SEO, Mobile Ready, Affordable Pricing`;
    }

    if (input === 'projects' || msg.includes('project')) {
      return `Project Support Premium Only
Source Code
Documentation
Interview Questions
Career Guidance`;
    }

    if (msg.includes('price') || msg.includes('cost')) {
      return `Pricing Quick View
Resume ₹5 to ₹25
Portfolio ₹49
Website varies
Projects Premium Only
WhatsApp us to discuss details`;
    }

    if (msg.includes('whatsapp')) {
      return `WhatsApp Support
Chat directly: +91 9876543210`;
    }

    return `Thanks for your query I help with
Resume or LinkedIn ₹5 to ₹25
Portfolio ₹49
Websites and Projects
Career Support
Let's chat on WhatsApp`;
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20Innovission%20Services', '_blank');
  };
  
  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all z-50">
        <MessageSquare className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">!</div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl z-50 transition-all border border-gray-200 ${isMinimized ? 'w-72' : 'w-96'}`}>
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-lg flex justify-between">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          <h3 className="font-semibold">Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={openWhatsApp} className="p-1 hover:bg-primary-800 rounded" title="WhatsApp">
            <Phone className="h-4 w-4" />
          </button>
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-primary-800 rounded">
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-primary-800 rounded">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg p-3 ${msg.type === 'user' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900 shadow-sm border'}`}>
                <div className="text-sm whitespace-pre-line">{msg.content}</div>
                {msg.buttons && (
                  <div className="mt-3 space-y-2">
                    {msg.buttons.map((button, btnIdx) => (
                      <button key={btnIdx} onClick={() => handleButtonClick(button.action)} className="block w-full text-left px-3 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded text-sm">
                        {button.text}
                      </button>
                    ))}
                  </div>
                )}
                <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-primary-100' : 'text-gray-500'}`}>{formatTime(msg.timestamp)}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      {!isMinimized && (
        <div className="p-4 border-t bg-white rounded-b-lg">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask about services..." className="flex-1 p-2 border rounded-lg text-sm" ref={inputRef} />
            <button type="submit" className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700">
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="mt-2 text-center">
            <a href="https://www.instagram.com/innovissio.n?igsh=OHoxZXdsb245bnpp" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:text-primary-800 flex justify-center">
              Follow us on Instagram
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
