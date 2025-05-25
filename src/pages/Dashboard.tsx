
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sparkles, TrendingUp, Eye, Heart, MousePointer, Download, ArrowLeft, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { toast } = useToast();

  const platformStats = [
    {
      platform: "Reddit",
      icon: "📱",
      posts: 3,
      views: "12.4K",
      likes: "342",
      clicks: "89",
      engagement: "2.8%",
      color: "bg-orange-50 border-orange-200"
    },
    {
      platform: "Twitter",
      icon: "🐦",
      posts: 2,
      views: "8.7K",
      likes: "156",
      clicks: "67",
      engagement: "2.5%",
      color: "bg-blue-50 border-blue-200"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      posts: 1,
      views: "5.2K",
      likes: "98",
      clicks: "34",
      engagement: "2.5%",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      platform: "Product Hunt",
      icon: "🚀",
      posts: 1,
      views: "3.1K",
      likes: "67",
      clicks: "23",
      engagement: "2.9%",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const feedbackData = [
    {
      id: 1,
      username: "alexdev92",
      platform: "Reddit",
      comment: "Love the productivity features! Really helps my workflow.",
      rating: 5,
      date: "2024-01-20"
    },
    {
      id: 2,
      username: "sarahdesigner",
      platform: "Twitter",
      comment: "Great tool but could use better mobile support.",
      rating: 4,
      date: "2024-01-19"
    },
    {
      id: 3,
      username: "mikestartup",
      platform: "LinkedIn",
      comment: "Exactly what my team needed. Seamless integration!",
      rating: 5,
      date: "2024-01-18"
    },
    {
      id: 4,
      username: "jennypm",
      platform: "Product Hunt",
      comment: "Solid product. Looking forward to future updates.",
      rating: 4,
      date: "2024-01-17"
    },
    {
      id: 5,
      username: "tomcoder",
      platform: "Reddit",
      comment: "Interface is intuitive and saves me tons of time.",
      rating: 5,
      date: "2024-01-16"
    }
  ];

  const downloadReport = () => {
    toast({
      title: "Report Generated",
      description: "Your analytics report is being prepared for download.",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Overview Stats */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Campaign Overview</span>
              </CardTitle>
              <CardDescription>
                Performance metrics across all platforms for the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">29.4K</div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">663</div>
                  <div className="text-sm text-gray-600">Total Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">213</div>
                  <div className="text-sm text-gray-600">Total Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2.7%</div>
                  <div className="text-sm text-gray-600">Avg Engagement</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Analytics */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>Platform Performance</span>
              </CardTitle>
              <CardDescription>
                Detailed analytics for each platform where your content was published
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {platformStats.map((platform, index) => (
                  <div key={index} className={`p-6 rounded-lg border-2 ${platform.color}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{platform.icon}</span>
                        <div>
                          <h3 className="font-semibold text-lg">{platform.platform}</h3>
                          <p className="text-sm text-gray-600">{platform.posts} posts published</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {platform.engagement} rate
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Eye className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold">{platform.views}</span>
                        </div>
                        <p className="text-xs text-gray-600">Views</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Heart className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold">{platform.likes}</span>
                        </div>
                        <p className="text-xs text-gray-600">Likes</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <MousePointer className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold">{platform.clicks}</span>
                        </div>
                        <p className="text-xs text-gray-600">Clicks</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Table */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>User Feedback</span>
              </CardTitle>
              <CardDescription>
                Recent feedback and ratings from your audience across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feedbackData.map((feedback) => (
                    <TableRow key={feedback.id}>
                      <TableCell className="font-medium">@{feedback.username}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-gray-50">
                          {feedback.platform}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {feedback.comment}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          {renderStars(feedback.rating)}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-500">
                        {feedback.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
