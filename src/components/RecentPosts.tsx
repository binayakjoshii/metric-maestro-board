
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const RecentPosts = () => {
  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'New collection drop this Friday! Stay tuned 🔥',
      timeAgo: '2h ago',
      status: 'published',
      platformColor: '#E4405F'
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Thanks to everyone who joined our webinar today!',
      timeAgo: '4h ago',
      status: 'published',
      platformColor: '#1DA1F2'
    },
    {
      id: 3,
      platform: 'LinkedIn',
      content: 'How to improve your social media ROI in 2024',
      timeAgo: '6h ago',
      status: 'scheduled',
      platformColor: '#0A66C2'
    },
    {
      id: 4,
      platform: 'Facebook',
      content: 'Check out our latest customer success stories',
      timeAgo: '8h ago',
      status: 'draft',
      platformColor: '#1877F2'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'draft':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Recent Activity
        </CardTitle>
        <CardDescription>Latest posts across all platforms</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="p-3 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
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
              <div className="flex items-center gap-2">
                <Badge className={getStatusColor(post.status)}>
                  {post.status}
                </Badge>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreHorizontal className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-slate-700 mb-2 line-clamp-2">{post.content}</p>
            
            <p className="text-xs text-slate-500">{post.timeAgo}</p>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4">
          View All Posts
        </Button>
      </CardContent>
    </Card>
  );
};
