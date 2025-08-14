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
  context?: {
    intent: string
    mood?: string
    entities: string[]
  }
}

interface ConversationContext {
  userPreferences: {
    genres: string[]
    recentInteractions: string[]
    currentMood?: string
  }
  conversationHistory: Message[]
  lastIntent?: string
}

export function BeevusChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "beevus",
      content:
        "Hello! I'm Beevus, your AI entertainment companion. I adapt to your unique preferences and conversation style. Tell me what's on your mind - I'll understand the context and provide personalized help!",
      timestamp: new Date(),
      suggestions: [
        "I'm feeling adventurous today",
        "Help me find something cozy",
        "What matches my current mood?",
        "Surprise me with something new",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    userPreferences: {
      genres: [],
      recentInteractions: [],
    },
    conversationHistory: [],
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const analyzeUserInput = (input: string, context: ConversationContext) => {
    const words = input.toLowerCase().split(" ")
    const entities = []
    let intent = "general"
    let mood = null

    // Dynamic intent detection based on context and patterns
    const intentPatterns = {
      recommendation: ["recommend", "suggest", "find", "show", "what should", "help me choose"],
      mood_based: ["feeling", "mood", "vibe", "atmosphere", "tone"],
      progress: ["progress", "tracking", "finished", "completed", "reading", "watching"],
      discovery: ["new", "different", "explore", "discover", "surprise"],
      specific_query: ["about", "tell me", "explain", "why", "how"],
      social: ["friends", "popular", "trending", "everyone", "people"],
    }

    // Mood detection
    const moodPatterns = {
      adventurous: ["adventure", "exciting", "thrilling", "bold", "daring"],
      cozy: ["cozy", "comfort", "warm", "relaxing", "peaceful", "calm"],
      intellectual: ["smart", "deep", "thoughtful", "complex", "challenging"],
      emotional: ["emotional", "touching", "heartfelt", "moving", "feelings"],
      fun: ["fun", "light", "funny", "entertaining", "cheerful", "upbeat"],
      dark: ["dark", "serious", "intense", "heavy", "dramatic"],
    }

    // Extract entities (genres, titles, authors, etc.)
    const genreKeywords = [
      "sci-fi",
      "fantasy",
      "romance",
      "thriller",
      "comedy",
      "drama",
      "horror",
      "mystery",
      "biography",
      "history",
    ]
    const mediaKeywords = ["book", "movie", "film", "novel", "series", "documentary"]

    // Analyze input dynamically
    for (const [intentType, patterns] of Object.entries(intentPatterns)) {
      if (patterns.some((pattern) => input.toLowerCase().includes(pattern))) {
        intent = intentType
        break
      }
    }

    for (const [moodType, patterns] of Object.entries(moodPatterns)) {
      if (patterns.some((pattern) => input.toLowerCase().includes(pattern))) {
        mood = moodType
        break
      }
    }

    genreKeywords.forEach((genre) => {
      if (input.toLowerCase().includes(genre)) entities.push(genre)
    })

    mediaKeywords.forEach((media) => {
      if (input.toLowerCase().includes(media)) entities.push(media)
    })

    return { intent, mood, entities }
  }

  const generateContextualResponse = (userInput: string, analysis: any, context: ConversationContext): Message => {
    const { intent, mood, entities } = analysis

    // Update conversation context
    const updatedContext = {
      ...context,
      userPreferences: {
        ...context.userPreferences,
        currentMood: mood || context.userPreferences.currentMood,
        recentInteractions: [...context.userPreferences.recentInteractions, userInput].slice(-5),
      },
      lastIntent: intent,
    }

    setConversationContext(updatedContext)

    // Generate dynamic response based on analysis
    let responseContent = ""
    let suggestions: string[] = []
    let recommendations = null

    switch (intent) {
      case "mood_based":
        responseContent = `I can sense you're looking for something that matches your ${mood || "current"} mood. Let me find content that resonates with how you're feeling right now.`
        suggestions = [
          `More ${mood || "similar"} recommendations`,
          "Tell me more about your mood",
          "Show me different vibes",
          "What else matches this feeling?",
        ]
        recommendations = generateMoodBasedRecommendations(mood, entities)
        break

      case "discovery":
        responseContent =
          "I love helping you discover new experiences! Based on our conversation and your unique preferences, here are some fresh recommendations that might surprise you."
        suggestions = [
          "Show me more hidden gems",
          "Something completely different",
          "Based on my history",
          "Random surprise me",
        ]
        recommendations = generateDiscoveryRecommendations(context, entities)
        break

      case "progress":
        responseContent = `I see you're interested in tracking your entertainment journey. ${getProgressInsight(context)} What would you like to update or explore?`
        suggestions = ["Update current progress", "Set new goals", "View detailed stats", "Celebrate achievements"]
        break

      case "social":
        responseContent =
          "Great question! I can show you what's resonating with people right now, plus personalized picks based on social trends and your taste."
        suggestions = [
          "What's trending in my genres?",
          "Popular with similar users",
          "Social recommendations",
          "Community favorites",
        ]
        recommendations = generateSocialRecommendations(entities)
        break

      case "specific_query":
        responseContent = analyzeSpecificQuery(userInput, context)
        suggestions = generateContextualSuggestions(userInput, context)
        break

      default:
        // Dynamic general response based on conversation history
        const recentTopics = context.userPreferences.recentInteractions.join(" ")
        responseContent = generatePersonalizedResponse(userInput, recentTopics, context)
        suggestions = [
          "Tell me more about this",
          "Show me related content",
          "Based on our conversation",
          "Something similar but different",
        ]
    }

    return {
      id: Date.now().toString(),
      type: "beevus",
      content: responseContent,
      timestamp: new Date(),
      suggestions,
      recommendations,
      context: { intent, mood, entities },
    }
  }

  const generateMoodBasedRecommendations = (mood: string | null, entities: string[]) => {
    const moodRecommendations = {
      adventurous: [
        {
          title: "The Seven Husbands of Evelyn Hugo",
          type: "book" as const,
          author: "Taylor Jenkins Reid",
          rating: 4.6,
          reason: "Bold storytelling with unexpected twists that match your adventurous spirit",
        },
        {
          title: "Mad Max: Fury Road",
          type: "movie" as const,
          director: "George Miller",
          rating: 4.4,
          reason: "High-octane adventure that delivers the thrill you're seeking",
        },
      ],
      cozy: [
        {
          title: "The House in the Cerulean Sea",
          type: "book" as const,
          author: "TJ Klune",
          rating: 4.7,
          reason: "Warm, comforting fantasy that creates the perfect cozy atmosphere",
        },
        {
          title: "Julie & Julia",
          type: "movie" as const,
          director: "Nora Ephron",
          rating: 4.2,
          reason: "Heartwarming story that feels like a warm hug",
        },
      ],
      intellectual: [
        {
          title: "Klara and the Sun",
          type: "book" as const,
          author: "Kazuo Ishiguro",
          rating: 4.3,
          reason: "Thought-provoking narrative that challenges your perspective",
        },
        {
          title: "Arrival",
          type: "movie" as const,
          director: "Denis Villeneuve",
          rating: 4.5,
          reason: "Intellectually stimulating sci-fi that rewards deep thinking",
        },
      ],
    }

    return (
      moodRecommendations[mood as keyof typeof moodRecommendations] || [
        {
          title: "Circe",
          type: "book" as const,
          author: "Madeline Miller",
          rating: 4.5,
          reason: "Beautifully crafted story that adapts to any mood",
        },
        {
          title: "The Grand Budapest Hotel",
          type: "movie" as const,
          director: "Wes Anderson",
          rating: 4.3,
          reason: "Visually stunning film with universal appeal",
        },
      ]
    )
  }

  const generateDiscoveryRecommendations = (context: ConversationContext, entities: string[]) => {
    // Generate recommendations based on conversation context and user's exploration intent
    return [
      {
        title: "The Midnight Library",
        type: "book" as const,
        author: "Matt Haig",
        rating: 4.4,
        reason: "Unique concept that explores infinite possibilities - perfect for discovery",
      },
      {
        title: "Everything Everywhere All at Once",
        type: "movie" as const,
        director: "Daniels",
        rating: 4.6,
        reason: "Genre-bending experience that defies expectations",
      },
    ]
  }

  const generateSocialRecommendations = (entities: string[]) => {
    return [
      {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        type: "book" as const,
        author: "Gabrielle Zevin",
        rating: 4.5,
        reason: "Currently trending and beloved by readers worldwide",
      },
      {
        title: "Top Gun: Maverick",
        type: "movie" as const,
        director: "Joseph Kosinski",
        rating: 4.4,
        reason: "Widely acclaimed and socially celebrated recent release",
      },
    ]
  }

  const analyzeSpecificQuery = (input: string, context: ConversationContext) => {
    // Analyze the specific question and provide contextual answer
    if (input.toLowerCase().includes("why")) {
      return "That's a great question! Based on our conversation, I can provide insights tailored to your specific interests and preferences."
    }
    if (input.toLowerCase().includes("how")) {
      return "I'd be happy to guide you through that! Let me break it down in a way that makes sense for your situation."
    }
    return "I understand you're looking for specific information. Let me provide a detailed response based on your unique context and our conversation history."
  }

  const generatePersonalizedResponse = (input: string, recentTopics: string, context: ConversationContext) => {
    const hasHistory = recentTopics.length > 0
    if (hasHistory) {
      return `Based on our conversation about ${recentTopics.split(" ").slice(-3).join(", ")}, I can see you're interested in exploring this further. Let me provide some personalized insights!`
    }
    return "I'm here to understand exactly what you're looking for. Every response I give is tailored to your unique preferences and our conversation. What's on your mind?"
  }

  const generateContextualSuggestions = (input: string, context: ConversationContext) => {
    const lastIntent = context.lastIntent
    const suggestions = [
      "Tell me more about this",
      "Show me something similar",
      "Based on my preferences",
      "Surprise me with variety",
    ]

    if (lastIntent === "mood_based") {
      suggestions.push("Match my current vibe")
    }
    if (lastIntent === "discovery") {
      suggestions.push("More hidden gems")
    }

    return suggestions.slice(0, 4)
  }

  const getProgressInsight = (context: ConversationContext) => {
    const interactions = context.userPreferences.recentInteractions
    if (interactions.length > 0) {
      return "I can see you've been actively engaging with your entertainment choices."
    }
    return "Let's explore your entertainment journey together."
  }

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

    setTimeout(() => {
      const analysis = analyzeUserInput(content, conversationContext)
      const aiResponse = generateContextualResponse(content, analysis, conversationContext)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
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
