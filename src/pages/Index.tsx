
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Users, Heart, MessageCircle, Share2, Eye, Download, RefreshCw } from 'lucide-react';
import { MetricsOverview } from '@/components/MetricsOverview';
import { EngagementChart } from '@/components/EngagementChart';
import { PlatformMetrics } from '@/components/PlatformMetrics';
import { RecentPosts } from '@/components/RecentPosts';
import { TopContent } from '@/components/TopContent';

const Index = () => {
  const [timeRange, setTimeRange] = useState('7d');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Social Media Dashboard
            </h1>
            <p className="text-slate-600 text-lg font-medium">Track and analyze your social media performance across all platforms</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[160px] h-11 bg-white/60 backdrop-blur-sm border-slate-200/50 hover:bg-white/80 transition-all duration-200 shadow-sm">
                <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm border-slate-200/50">
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon" className="h-11 w-11 bg-white/60 backdrop-blur-sm border-slate-200/50 hover:bg-white/80 hover:scale-105 transition-all duration-200 shadow-sm">
              <RefreshCw className="w-4 h-4 text-slate-600" />
            </Button>
            
            <Button className="h-11 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="animate-fade-in">
          <MetricsOverview timeRange={timeRange} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 pointer-events-none"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Engagement Trends
                </CardTitle>
                <CardDescription className="text-slate-600">Track your engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <EngagementChart timeRange={timeRange} />
              </CardContent>
            </Card>

            <div className="animate-fade-in">
              <PlatformMetrics timeRange={timeRange} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <TopContent />
            </div>
            <div className="animate-fade-in">
              <RecentPosts />
            </div>
          </div>
        </div>

        {/* Platform Tabs */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-blue-50/30 pointer-events-none"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl">Platform Deep Dive</CardTitle>
            <CardDescription className="text-slate-600">Detailed analytics for each social media platform</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <Tabs defaultValue="instagram" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-100/50 p-1 rounded-xl">
                <TabsTrigger 
                  value="instagram" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-200 font-medium"
                >
                  Instagram
                </TabsTrigger>
                <TabsTrigger 
                  value="twitter" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-200 font-medium"
                >
                  Twitter
                </TabsTrigger>
                <TabsTrigger 
                  value="facebook" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-800 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-200 font-medium"
                >
                  Facebook
                </TabsTrigger>
                <TabsTrigger 
                  value="linkedin" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-blue-900 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-200 font-medium"
                >
                  LinkedIn
                </TabsTrigger>
              </TabsList>
              
              {['instagram', 'twitter', 'facebook', 'linkedin'].map((platform) => (
                <TabsContent key={platform} value={platform} className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-600 capitalize">{platform} Followers</p>
                          <p className="text-2xl font-bold text-slate-900">{(Math.random() * 100000).toFixed(0)}</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-gradient-to-br from-white/80 to-red-50/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-600">Engagement Rate</p>
                          <p className="text-2xl font-bold text-slate-900">{(Math.random() * 10).toFixed(1)}%</p>
                        </div>
                        <div className="p-3 bg-red-100 rounded-full">
                          <Heart className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-600">Impressions</p>
                          <p className="text-2xl font-bold text-slate-900">{(Math.random() * 1000000).toFixed(0)}</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-full">
                          <Eye className="w-6 h-6 text-green-500" />
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-600">Reach</p>
                          <p className="text-2xl font-bold text-slate-900">{(Math.random() * 500000).toFixed(0)}</p>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-full">
                          <Share2 className="w-6 h-6 text-purple-500" />
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
