import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sparkles, Globe, Users, TrendingUp, Search, Lock, Star, ExternalLink, FileText, Image, Calendar as CalendarIcon, Clock, Edit, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Stepper } from "@/components/ui/Stepper"

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'input' | 'analyzing' | 'results' | 'communities' | 'finding' | 'communityResults' | 'generating' | 'contentPreview' | 'scheduling' | 'scheduled'>('input');
  const [productUrl, setProductUrl] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);
  const [generatedContent, setGeneratedContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState<Date>();
  const [scheduledTime, setScheduledTime] = useState('09:00');
  const { toast } = useToast();

  const analyzeProduct = () => {
    if (!productUrl.trim()) {
      toast({
        title: "Please enter a product URL",
        description: "We need a valid URL to analyze your product.",
        variant: "destructive"
      });
      return;
    }
    
    setCurrentStep('analyzing');
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCurrentStep('results'), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const findCommunities = () => {
    setCurrentStep('finding');
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCurrentStep('communityResults'), 500);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 150);
  };

  const generateContent = () => {
    setCurrentStep('generating');
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGeneratedContent(`🚀 Excited to share our new productivity tool that's changing how teams collaborate!

After months of development, we've created something that helps you:
✅ Streamline your workflow
✅ Boost team productivity by 40%
✅ Integrate with your favorite tools

Perfect for busy professionals and growing teams. What do you think? Would love your feedback!

#productivity #saas #teamwork #efficiency`);
          setTimeout(() => setCurrentStep('contentPreview'), 500);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 180);
  };

  const schedulePost = () => {
    setCurrentStep('scheduled');
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 100);
  };

  const mockInfluencers = [
    { type: "Tech Reviewers", match: "95%", description: "YouTube tech channels with 100K+ subscribers" },
    { type: "Productivity Bloggers", match: "87%", description: "Writers focused on efficiency and tools" },
    { type: "Startup Founders", match: "82%", description: "Entrepreneurs sharing their journey" },
    { type: "Design Communities", match: "76%", description: "UI/UX professionals and enthusiasts" }
  ];

  const mockPlatforms = [
    { name: "Product Hunt", icon: "🚀", status: "Recommended" },
    { name: "IndieHackers", icon: "👨‍💻", status: "High Impact" },
    { name: "Hacker News", icon: "📰", status: "Consider" },
    { name: "BetaList", icon: "🌟", status: "Startup Focus" }
  ];

  const mockCommunities = [
    { id: "1", name: "r/SaaS", platform: "Reddit", members: "145K", relevance: 94, premium: false, description: "Software as a Service discussion" },
    { id: "2", name: "r/startups", platform: "Reddit", members: "1.2M", relevance: 89, premium: false, description: "Startup community and advice" },
    { id: "3", name: "Indie Hackers Slack", platform: "Slack", members: "65K", relevance: 92, premium: true, description: "Bootstrap entrepreneur community" },
    { id: "4", name: "r/entrepreneur", platform: "Reddit", members: "2.1M", relevance: 78, premium: false, description: "Entrepreneurship discussions" },
    { id: "5", name: "Product Hunt Makers", platform: "Slack", members: "45K", relevance: 96, premium: true, description: "Product builders community" },
    { id: "6", name: "r/InternetIsBeautiful", platform: "Reddit", members: "17M", relevance: 71, premium: false, description: "Cool websites and tools" }
  ];

  const toggleCommunity = (communityId: string) => {
    setSelectedCommunities(prev => 
      prev.includes(communityId) 
        ? prev.filter(id => id !== communityId)
        : [...prev, communityId]
    );
  };

  if (currentStep === 'input') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WizibilityAi
              </span>
            </div>
            
            <Stepper currentStep={currentStep} className="flex-1 mx-4" />

            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              Free Preview
            </Badge>
          </div>
        </div>

        

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              From No-Code saas to initial users in few clicks
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Built your app with Lovable, Bolt, or other no-code tools? <b>Now What?</b> <br/>
              Get your first users in days, not months. Ai-powered community mathcing finds your perfect early adopters.
            </p>
            
            {/* Product Input Form */}
            <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span>Find Your First Users Now</span>
                </CardTitle>
                <CardDescription>
                  Paste your product URL or website link to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="https://yourproduct.com"
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  className="text-lg py-3"
                />
                <Button 
                  onClick={analyzeProduct}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3"
                  size="lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find Tailored Communities with AI
                </Button>
              </CardContent>
            </Card>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Smart Influencer Matching</h3>
                  <p className="text-gray-600 text-sm">AI identifies the perfect influencers for your niche and audience</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community Discovery</h3>
                  <p className="text-gray-600 text-sm">Find active communities where your target customers gather</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Launch Strategy</h3>
                  <p className="text-gray-600 text-sm">Get personalized recommendations for platform launches</p>
                </CardContent>
              </Card>
            </div>
            {/* Using AI Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
  <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
    <CardContent className="p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-red-600">
        The No-Code Builder's Dilemma
      </h2>
      <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm md:text-base">
        <li>Build an amazing product but don't know how to find users</li>
        <li>Takes weeks or months to get first feedback</li>
        <li>Delayed product-market fit validation</li>
        <li>Don't know which communities to target</li>
        <li>Wasted time on irrelevant platforms</li>
      </ul>
    </CardContent>
  </Card>

  <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
    <CardContent className="p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-green-700">
        The Wizibility AI Solution
      </h2>
      <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm md:text-base">
        <li>AI analyzes your product and finds perfect communities</li>
        <li>Get first users in days, not months</li>
        <li>Faster validation and iteration cycles</li>
        <li>Targeted community recommendations</li>
        <li>Automated content generation for launches</li>
      </ul>
    </CardContent>
  </Card>
</div>

          </div>
        </div>
      </div>
      
    );
  }

  if (currentStep === 'analyzing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-purple-600 mx-auto animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-purple-200 animate-ping opacity-25"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyzing Your Product</h3>
            <p className="text-gray-600 mb-6">Our AI is examining your product to understand its market positioning...</p>
            <Progress value={loadingProgress} className="mb-4" />
            <p className="text-sm text-gray-500">{Math.round(loadingProgress)}% complete</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WizibilityAi
              </span>
            </div>
                        <Stepper currentStep={currentStep} className="flex-1 mx-4" />

            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Analysis Complete
            </Badge>
          </div>

          {/* Analysis Results */}
          <div className="space-y-8">
            {/* Product Overview */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span>Product Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">SaaS Productivity Tool</h4>
                  <p className="text-gray-700">
                    AI detected: A productivity-focused software solution targeting professionals and small teams. 
                    Primary value proposition centers around workflow optimization and time management.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Influencer Recommendations */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Recommended Influencer Types</span>
                </CardTitle>
                <CardDescription>
                  AI-matched influencers based on your product category and target audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {mockInfluencers.map((influencer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <h4 className="font-semibold">{influencer.type}</h4>
                        <p className="text-sm text-gray-600">{influencer.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {influencer.match} match
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Launch Platforms */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <span>Recommended Launch Platforms</span>
                </CardTitle>
                <CardDescription>
                  Best platforms for your product launch based on category and audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-2xl">{platform.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold">{platform.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {platform.status}
                        </Badge>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Continue Button */}
            <div className="text-center">
              <Button 
                onClick={findCommunities}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Search className="mr-2 h-5 w-5" />
                Find Relevant Communities
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'finding') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <Search className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-25"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Finding Communities</h3>
            <p className="text-gray-600 mb-6">Scanning thousands of communities to find the perfect matches for your product...</p>
            <Progress value={loadingProgress} className="mb-4" />
            <p className="text-sm text-gray-500">{Math.round(loadingProgress)}% complete</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'communityResults') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WizibilityAi
              </span>
            </div>
                        <Stepper currentStep={currentStep} className="flex-1 mx-4" />

            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {selectedCommunities.length} Communities Selected
            </Badge>
          </div>

          {/* Community Results */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-blue-600" />
                <span>Relevant Communities Found</span>
              </CardTitle>
              <CardDescription>
                Select communities where your target audience is most active. Premium communities offer higher engagement rates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCommunities.map((community) => (
                  <div 
                    key={community.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedCommunities.includes(community.id)
                        ? 'border-purple-200 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => toggleCommunity(community.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        checked={selectedCommunities.includes(community.id)}
                        onChange={() => toggleCommunity(community.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold">{community.name}</h4>
                          {community.premium && (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              <Lock className="h-3 w-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                          <Badge variant="secondary" className="bg-green-50 text-green-700">
                            {community.relevance}% match
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{community.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <span className="font-medium">{community.platform}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{community.members} members</span>
                          </span>
                          {community.relevance > 90 && (
                            <span className="flex items-center space-x-1 text-green-600">
                              <Star className="h-3 w-3 fill-current" />
                              <span>High relevance</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedCommunities.length > 0 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Selected Communities Summary</h4>
                  <p className="text-sm text-gray-700">
                    You've selected {selectedCommunities.length} communities with a combined reach of 2.8M+ members.
                    Estimated engagement potential: High
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generate Content Button */}
          {selectedCommunities.length > 0 && (
            <div className="text-center">
              <Button 
                onClick={generateContent}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <FileText className="mr-2 h-5 w-5" />
                Generate Marketing Content
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentStep === 'generating') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <FileText className="h-16 w-16 text-indigo-600 mx-auto animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-indigo-200 animate-ping opacity-25"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Generating Marketing Content</h3>
            <p className="text-gray-600 mb-6">AI is creating personalized content for your selected communities...</p>
            <Progress value={loadingProgress} className="mb-4" />
            <p className="text-sm text-gray-500">{Math.round(loadingProgress)}% complete</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'contentPreview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WizibilityAi
              </span>
            </div>
                        <Stepper currentStep={currentStep} className="flex-1 mx-4" />

            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
              Content Generated
            </Badge>
          </div>

          <div className="space-y-8">
            {/* Generated Content */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <span>Generated Post Content</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
                <CardDescription>
                  AI-generated content optimized for your selected communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  className="min-h-[200px] text-base leading-relaxed"
                  placeholder="Generated content will appear here..."
                />
              </CardContent>
            </Card>

            {/* Image Placeholder */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image className="h-5 w-5 text-blue-600" />
                    <span>Marketing Banner</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
                <CardDescription>
                  AI-generated visual content for your posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Image className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Marketing Banner Preview</p>
                    <p className="text-sm text-gray-400">1200x630px • Optimized for social media</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Form Link */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5 text-green-600" />
                    <span>Feedback Collection</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
                <CardDescription>
                  Collect feedback from your audience with this custom form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-medium text-green-800">Feedback Form Link</p>
                  <p className="text-sm text-green-600 mt-1">https://feedback.yourproduct.com/survey/123</p>
                  <p className="text-xs text-green-500 mt-2">This link will be included in your posts to gather valuable user feedback</p>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Post Button */}
            <div className="text-center">
              <Button 
                onClick={() => setCurrentStep('scheduling')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                Schedule Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'scheduling') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WizibilityAi
              </span>
            </div>
                        <Stepper currentStep={currentStep} className="flex-1 mx-4" />

            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Scheduling Post
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Date Time Picker */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-purple-600" />
                  <span>Schedule Your Post</span>
                </CardTitle>
                <CardDescription>
                  Choose when you want your content to be published across selected communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !scheduledDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {scheduledDate ? format(scheduledDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={scheduledDate}
                          onSelect={setScheduledDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Picker */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Time</label>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <Input
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  <span>Publishing Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Selected Communities */}
                <div>
                  <h4 className="font-semibold mb-2">Selected Communities ({selectedCommunities.length})</h4>
                  <div className="grid gap-2">
                    {selectedCommunities.map((communityId) => {
                      const community = mockCommunities.find(c => c.id === communityId);
                      return community ? (
                        <div key={communityId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium">{community.name}</span>
                            <span className="text-sm text-gray-500 ml-2">({community.platform})</span>
                          </div>
                          <Badge variant="secondary" className="bg-green-50 text-green-700">
                            {community.relevance}% match
                          </Badge>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Content Preview */}
                <div>
                  <h4 className="font-semibold mb-2">Content Preview</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {generatedContent.substring(0, 150)}...
                    </p>
                  </div>
                </div>

                {/* Schedule Info */}
                {scheduledDate && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Scheduled for:</h4>
                    <p className="text-lg font-medium text-purple-700">
                      {format(scheduledDate, "EEEE, MMMM do, yyyy")} at {scheduledTime}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Confirm Button */}
            <div className="text-center">
              <Button 
                onClick={schedulePost}
                size="lg"
                disabled={!scheduledDate}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
              >
                <Send className="mr-2 h-5 w-5" />
                Confirm & Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'scheduled') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-lg mx-4 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative">
                <Send className="h-16 w-16 text-green-600 mx-auto" />
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-25"></div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">Successfully Scheduled!</h3>
            <p className="text-gray-600 mb-6">
              Your marketing content has been scheduled to post across {selectedCommunities.length} communities
              {scheduledDate && (
                <span className="block mt-2 font-medium">
                  on {format(scheduledDate, "MMMM do, yyyy")} at {scheduledTime}
                </span>
              )}
            </p>
            <Progress value={loadingProgress} className="mb-4" />
            <p className="text-sm text-gray-500">Sending to platforms...</p>
            
            <div className="mt-8 space-y-3">
              <Button 
                onClick={() => setCurrentStep('input')}
                variant="outline"
                className="w-full"
              >
                Start New Campaign
              </Button>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <a href="/dashboard">View Dashboard</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default Index;
