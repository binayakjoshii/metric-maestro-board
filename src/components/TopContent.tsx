
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
      platformColor: '#E4405F'
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Excited to announce our new partnership! 🎉',
      likes: 3200,
      comments: 156,
      shares: 245,
      engagement: 6.8,
      platformColor: '#1DA1F2'
    },
    {
      id: 3,
      platform: 'LinkedIn',
      content: 'Insights from our recent industry report',
      likes: 890,
      comments: 67,
      shares: 123,
      engagement: 9.1,
      platformColor: '#0A66C2'
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          Top Performing Content
        </CardTitle>
        <CardDescription>Your best posts from the last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {topPosts.map((post, index) => (
          <div key={post.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <Badge 
                variant="outline" 
                className="text-xs"
                style={{ 
                  borderColor: post.platformColor,
                  color: post.platformColor
                }}
              >
                {post.platform}
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                {post.engagement}% engagement
              </Badge>
            </div>
            
            <p className="text-sm text-slate-700 mb-3 line-clamp-2">{post.content}</p>
            
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {(post.likes / 1000).toFixed(1)}K
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="w-3 h-3" />
                  {post.shares}
                </span>
              </div>
              <span className="text-green-600 font-medium">#{index + 1}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
