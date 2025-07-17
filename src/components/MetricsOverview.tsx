
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Heart, MessageCircle, Share2 } from 'lucide-react';

interface MetricsOverviewProps {
  timeRange: string;
}

export const MetricsOverview = ({ timeRange }: MetricsOverviewProps) => {
  const metrics = [
    {
      title: "Total Followers",
      value: "234.5K",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-blue-500"
    },
    {
      title: "Total Likes",
      value: "45.2K",
      change: "+8.3%",
      trend: "up",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100",
      iconBg: "bg-red-500"
    },
    {
      title: "Comments",
      value: "12.8K",
      change: "-2.1%",
      trend: "down",
      icon: MessageCircle,
      color: "text-green-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      iconBg: "bg-green-500"
    },
    {
      title: "Shares",
      value: "8.9K",
      change: "+15.7%",
      trend: "up",
      icon: Share2,
      color: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card 
          key={index} 
          className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
        >
          <div className={`absolute inset-0 ${metric.bgColor} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{metric.title}</p>
                <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
                <div className="flex items-center gap-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <Badge 
                    variant={metric.trend === 'up' ? 'default' : 'destructive'}
                    className={`text-xs font-medium ${
                      metric.trend === 'up' 
                        ? 'bg-green-100 text-green-700 hover:bg-green-100 border-green-200' 
                        : 'bg-red-100 text-red-700 hover:bg-red-100 border-red-200'
                    }`}
                  >
                    {metric.change}
                  </Badge>
                </div>
              </div>
              <div className={`p-4 rounded-2xl ${metric.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
