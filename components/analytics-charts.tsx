"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  Area,
  AreaChart,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function AnalyticsCharts() {
  const monthlyData = [
    { month: "Jan", books: 4, movies: 8, hours: 32 },
    { month: "Feb", books: 3, movies: 6, hours: 28 },
    { month: "Mar", books: 5, movies: 9, hours: 42 },
    { month: "Apr", books: 2, movies: 7, hours: 35 },
    { month: "May", books: 6, movies: 5, hours: 38 },
    { month: "Jun", books: 4, movies: 12, hours: 45 },
  ]

  const genreData = [
    { name: "Sci-Fi", value: 28, color: "#9333ea" },
    { name: "Fiction", value: 22, color: "#c026d3" },
    { name: "Thriller", value: 18, color: "#ec4899" },
    { name: "Romance", value: 12, color: "#7c3aed" },
    { name: "Biography", value: 10, color: "#a855f7" },
    { name: "Other", value: 10, color: "#6b21a8" },
  ]

  const readingProgressData = [
    { date: "Week 1", pages: 120, target: 100 },
    { date: "Week 2", pages: 95, target: 100 },
    { date: "Week 3", pages: 140, target: 100 },
    { date: "Week 4", pages: 110, target: 100 },
    { date: "Week 5", pages: 160, target: 100 },
    { date: "Week 6", pages: 130, target: 100 },
  ]

  return (
    <div className="space-y-8">
      {/* Monthly Activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Monthly Activity</CardTitle>
          <Select defaultValue="6months">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="year">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              books: {
                label: "Books",
                color: "#9333ea",
              },
              movies: {
                label: "Movies",
                color: "#ec4899",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="books" fill="#9333ea" radius={4} />
                <Bar dataKey="movies" fill="#ec4899" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Genre Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Genre Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Percentage",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {genreData.map((genre, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: genre.color }}></div>
                  <span className="text-xs text-muted-foreground">
                    {genre.name} ({genre.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reading Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Reading Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                pages: {
                  label: "Pages Read",
                  color: "#9333ea",
                },
                target: {
                  label: "Target",
                  color: "#c026d3",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={readingProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="pages" stroke="#9333ea" fill="#9333ea" fillOpacity={0.3} />
                  <Line type="monotone" dataKey="target" stroke="#c026d3" strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
