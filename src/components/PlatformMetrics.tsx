
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

interface PlatformMetricsProps {
  timeRange: string;
}

export const PlatformMetrics = ({ timeRange }: PlatformMetricsProps) => {
  const data = [
    {
      platform: 'Instagram',
      followers: 85000,
      engagement: 4.2,
      posts: 24,
      reach: 125000,
      icon: Instagram,
      color: '#E4405F'
    },
    {
      platform: 'Twitter',
      followers: 52000,
      engagement: 2.8,
      posts: 45,
      reach: 89000,
      icon: Twitter,
      color: '#1DA1F2'
    },
    {
      platform: 'Facebook',
      followers: 98000,
      engagement: 3.5,
      posts: 18,
      reach: 156000,
      icon: Facebook,
      color: '#1877F2'
    },
    {
      platform: 'LinkedIn',
      followers: 35000,
      engagement: 5.1,
      posts: 12,
      reach: 67000,
      icon: Linkedin,
      color: '#0A66C2'
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Platform Performance
        </CardTitle>
        <CardDescription>Compare metrics across all your social media platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((platform, index) => (
              <Card key={index} className="p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${platform.color}20` }}>
                      <platform.icon className="w-5 h-5" style={{ color: platform.color }} />
                    </div>
                    <h3 className="font-semibold">{platform.platform}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Engagement Rate</p>
                    <p className="text-lg font-bold">{platform.engagement}%</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-slate-600">Followers</p>
                    <p className="font-semibold">{(platform.followers / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Posts</p>
                    <p className="font-semibold">{platform.posts}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Reach</p>
                    <p className="font-semibold">{(platform.reach / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparison Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="platform" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="followers" 
                  fill="#6366f1" 
                  radius={[4, 4, 0, 0]}
                  name="Followers"
                />
                <Bar 
                  dataKey="reach" 
                  fill="#ec4899" 
                  radius={[4, 4, 0, 0]}
                  name="Reach"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
