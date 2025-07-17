
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Social Media Dashboard
            </h1>
            <p className="text-slate-600">Track and analyze your social media performance across all platforms</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[140px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
              <RefreshCw className="w-4 h-4" />
            </Button>
            
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <MetricsOverview timeRange={timeRange} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  Engagement Trends
                </CardTitle>
                <CardDescription>Track your engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart timeRange={timeRange} />
              </CardContent>
            </Card>

            <PlatformMetrics timeRange={timeRange} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <TopContent />
            <RecentPosts />
          </div>
        </div>

        {/* Platform Tabs */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Platform Deep Dive</CardTitle>
            <CardDescription>Detailed analytics for each social media platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="instagram" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="instagram" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                  Instagram
                </TabsTrigger>
                <TabsTrigger value="twitter" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-blue-600 data-[state=active]:text-white">
                  Twitter
                </TabsTrigger>
                <TabsTrigger value="facebook" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-800 data-[state=active]:text-white">
                  Facebook
                </TabsTrigger>
                <TabsTrigger value="linkedin" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-blue-900 data-[state=active]:text-white">
                  LinkedIn
                </TabsTrigger>
              </TabsList>
              
              {['instagram', 'twitter', 'facebook', 'linkedin'].map((platform) => (
                <TabsContent key={platform} value={platform} className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600 capitalize">{platform} Followers</p>
                          <p className="text-2xl font-bold">{(Math.random() * 100000).toFixed(0)}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Engagement Rate</p>
                          <p className="text-2xl font-bold">{(Math.random() * 10).toFixed(1)}%</p>
                        </div>
                        <Heart className="w-8 h-8 text-red-500" />
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Impressions</p>
                          <p className="text-2xl font-bold">{(Math.random() * 1000000).toFixed(0)}</p>
                        </div>
                        <Eye className="w-8 h-8 text-green-500" />
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Reach</p>
                          <p className="text-2xl font-bold">{(Math.random() * 500000).toFixed(0)}</p>
                        </div>
                        <Share2 className="w-8 h-8 text-purple-500" />
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
