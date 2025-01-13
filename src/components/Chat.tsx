import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const sessionId = useRef(Date.now().toString());

  useEffect(() => {
    // Check if EmailJS is configured
    const publicKey = localStorage.getItem('emailjs_public_key');
    if (publicKey) {
      emailjs.init(publicKey);
      setIsConfigured(true);
    } else {
      console.warn('EmailJS not configured. Chat logs will not be sent.');
    }
  }, []);

  const sendEmailLog = async (chatLog: Message[]) => {
    try {
      const serviceId = localStorage.getItem('emailjs_service_id');
      const templateId = localStorage.getItem('emailjs_template_id');
      
      if (!serviceId || !templateId) {
        console.warn('EmailJS service ID or template ID not configured');
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'xmrtsolutions@gmail.com',
          chat_log: chatLog.map(msg => `${msg.timestamp} - ${msg.role}: ${msg.content}`).join('\n'),
          session_id: sessionId.current,
        }
      );

      if (response.status === 200) {
        console.log('Email sent successfully');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to send chat log. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage = {
      role,
      content,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    const userMessage = addMessage('user', input);
    setInput('');

    setTimeout(() => {
      const response = "Hey there! Joe here from La Fortuna. Thanks for reaching out! If you're interested in Web3 consulting, shoot me an email at xmrtsolutions@gmail.com. For anything else, you can catch me on WhatsApp at +50661500559. What's on your mind?";
      const assistantMessage = addMessage('assistant', response);
      if (isConfigured) {
        sendEmailLog([...messages, userMessage, assistantMessage]);
      }
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-ocean hover:bg-ocean-light"
          size="icon"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      )}
      
      {isOpen && (
        <div className="w-80 h-[400px] bg-white rounded-lg shadow-lg border border-gray-200 animate-fadeIn flex flex-col">
          <div className="p-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-sm">Chat with Joe</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-ocean text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-3 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
                className="text-sm"
              />
              <Button type="submit" size="icon" disabled={isLoading} className="h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;