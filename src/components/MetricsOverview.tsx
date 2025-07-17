
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
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Likes",
      value: "45.2K",
      change: "+8.3%",
      trend: "up",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "Comments",
      value: "12.8K",
      change: "-2.1%",
      trend: "down",
      icon: MessageCircle,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Shares",
      value: "8.9K",
      change: "+15.7%",
      trend: "up",
      icon: Share2,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-600">{metric.title}</p>
                <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
                <div className="flex items-center gap-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <Badge 
                    variant={metric.trend === 'up' ? 'default' : 'destructive'}
                    className={`text-xs ${metric.trend === 'up' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}`}
                  >
                    {metric.change}
                  </Badge>
                </div>
              </div>
              <div className={`p-3 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
