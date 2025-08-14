"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Mic, MicOff, Bot, User, BookOpen, Film, Star, Plus } from "lucide-react"

interface Message {
  id: string
  type: "user" | "beevus"
  content: string
  timestamp: Date
  suggestions?: string[]
  recommendations?: Array<{
    title: string
    type: "book" | "movie"
    author?: string
    director?: string
    rating: number
    reason: string
  }>
}

export function BeevusChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "beevus",
      content:
        "Hello! I'm Beevus, your AI entertainment companion. I can help you discover new books and movies, track your progress, and provide personalized recommendations. What would you like to explore today?",
      timestamp: new Date(),
      suggestions: [
        "Recommend sci-fi books",
        "What should I watch tonight?",
        "Help me track my reading",
        "Show trending movies",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()

    if (input.includes("recommend") && input.includes("book")) {
      return {
        id: Date.now().toString(),
        type: "beevus",
        content:
          "Based on your reading history and preferences, I've found some excellent book recommendations for you:",
        timestamp: new Date(),
        recommendations: [
          {
            title: "Klara and the Sun",
            type: "book",
            author: "Kazuo Ishiguro",
            rating: 4.2,
            reason: "Matches your interest in thoughtful sci-fi with emotional depth",
          },
          {
            title: "The Seven Moons of Maali Almeida",
            type: "book",
            author: "Shehan Karunatilaka",
            rating: 4.5,
            reason: "Award-winning fantasy that aligns with your diverse reading taste",
          },
        ],
        suggestions: ["Add to wishlist", "Tell me more about these", "Show different genres"],
      }
    }

    if (input.includes("movie") || input.includes("watch")) {
      return {
        id: Date.now().toString(),
        type: "beevus",
        content: "Perfect timing! Here are some movie recommendations tailored to your viewing preferences:",
        timestamp: new Date(),
        recommendations: [
          {
            title: "The Banshees of Inisherin",
            type: "movie",
            director: "Martin McDonagh",
            rating: 4.1,
            reason: "Dark comedy-drama that matches your taste for character-driven stories",
          },
          {
            title: "RRR",
            type: "movie",
            director: "S.S. Rajamouli",
            rating: 4.3,
            reason: "Epic action film with the storytelling depth you enjoy",
          },
        ],
        suggestions: ["Add to watchlist", "Find where to stream", "Show similar movies"],
      }
    }

    if (input.includes("progress") || input.includes("track")) {
      return {
        id: Date.now().toString(),
        type: "beevus",
        content:
          "I can help you track your reading and viewing progress! You currently have 3 books in progress and 2 movies on your watchlist. Would you like me to update any of them or set reading goals?",
        timestamp: new Date(),
        suggestions: ["Update current book", "Set reading goal", "View progress stats", "Mark something as completed"],
      }
    }

    return {
      id: Date.now().toString(),
      type: "beevus",
      content:
        "I understand you're looking for entertainment recommendations! I can help you discover new books and movies, track your progress, analyze your preferences, and much more. What specific area would you like to explore?",
      timestamp: new Date(),
      suggestions: [
        "Show my reading stats",
        "Recommend based on mood",
        "What's trending now?",
        "Help me choose tonight's movie",
      ],
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const toggleVoice = () => {
    setIsListening(!isListening)
    // Voice recognition would be implemented here
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-4 ${message.type === "user" ? "justify-end" : ""}`}>
            {message.type === "beevus" && (
              <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500">
                <AvatarFallback>
                  <Bot className="w-4 h-4 text-white" />
                </AvatarFallback>
              </Avatar>
            )}

            <div className={`max-w-2xl ${message.type === "user" ? "order-first" : ""}`}>
              <Card className={message.type === "user" ? "bg-purple-600 text-white" : "bg-card"}>
                <CardContent className="p-4">
                  <p className="text-sm">{message.content}</p>

                  {/* Recommendations */}
                  {message.recommendations && (
                    <div className="mt-4 space-y-3">
                      {message.recommendations.map((rec, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {rec.type === "book" ? (
                                <BookOpen className="w-4 h-4 text-purple-600" />
                              ) : (
                                <Film className="w-4 h-4 text-pink-500" />
                              )}
                              <h4 className="font-medium text-sm">{rec.title}</h4>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{rec.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">by {rec.author || rec.director}</p>
                          <p className="text-xs text-muted-foreground mb-2">{rec.reason}</p>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Plus className="w-3 h-3 mr-1" />
                            Add to Library
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs bg-transparent"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </CardContent>
              </Card>
            </div>

            {message.type === "user" && (
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-4">
            <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500">
              <AvatarFallback>
                <Bot className="w-4 h-4 text-white" />
              </AvatarFallback>
            </Avatar>
            <Card className="bg-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">Beevus is thinking...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t bg-card/50 backdrop-blur-sm p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Input
              placeholder="Ask Beevus anything about books, movies, or your entertainment preferences..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              className="pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${
                isListening ? "text-red-500" : "text-muted-foreground"
              }`}
              onClick={toggleVoice}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          </div>
          <Button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Suggestions */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "What should I read next?",
            "Recommend a movie for tonight",
            "Show my reading progress",
            "What's trending in sci-fi?",
          ].map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs bg-transparent"
              onClick={() => handleSendMessage(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
