
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

export const TopContent = () => {
  const topPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Behind the scenes of our latest product shoot 📸',
      likes: 12500,
      comments: 425,
      shares: 89,
      engagement: 8.2,
      platformColor: '#E4405F',
      bgGradient: 'from-pink-50 to-orange-50'
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Excited to announce our new partnership! 🎉',
      likes: 3200,
      comments: 156,
      shares: 245,
      engagement: 6.8,
      platformColor: '#1DA1F2',
      bgGradient: 'from-blue-50 to-sky-50'
    },
    {
      id: 3,
      platform: 'LinkedIn',
      content: 'Insights from our recent industry report',
      likes: 890,
      comments: 67,
      shares: 123,
      engagement: 9.1,
      platformColor: '#0A66C2',
      bgGradient: 'from-blue-50 to-indigo-50'
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30 pointer-events-none"></div>
      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          Top Performing Content
        </CardTitle>
        <CardDescription className="text-slate-600">Your best posts from the last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10">
        {topPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`p-5 border border-slate-200/50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-102 bg-gradient-to-r ${post.bgGradient} backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-4">
              <Badge 
                variant="outline" 
                className="text-xs font-medium px-3 py-1 bg-white/80 backdrop-blur-sm"
                style={{ 
                  borderColor: post.platformColor,
                  color: post.platformColor
                }}
              >
                {post.platform}
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-medium px-3 py-1 shadow-sm">
                {post.engagement}% engagement
              </Badge>
            </div>
            
            <p className="text-sm text-slate-700 mb-4 line-clamp-2 font-medium leading-relaxed">{post.content}</p>
            
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 bg-white/60 px-2 py-1 rounded-full">
                  <Heart className="w-3 h-3" />
                  {(post.likes / 1000).toFixed(1)}K
                </span>
                <span className="flex items-center gap-1.5 bg-white/60 px-2 py-1 rounded-full">
                  <MessageCircle className="w-3 h-3" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1.5 bg-white/60 px-2 py-1 rounded-full">
                  <Share2 className="w-3 h-3" />
                  {post.shares}
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                <span>#{index + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
