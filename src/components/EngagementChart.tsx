
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface EngagementChartProps {
  timeRange: string;
}

export const EngagementChart = ({ timeRange }: EngagementChartProps) => {
  const data = [
    { name: 'Mon', likes: 2400, comments: 1400, shares: 800, reach: 12000 },
    { name: 'Tue', likes: 1398, comments: 2210, shares: 900, reach: 15000 },
    { name: 'Wed', likes: 9800, comments: 2290, shares: 1200, reach: 18000 },
    { name: 'Thu', likes: 3908, comments: 2000, shares: 1100, reach: 16000 },
    { name: 'Fri', likes: 4800, comments: 2181, shares: 1300, reach: 20000 },
    { name: 'Sat', likes: 3800, comments: 2500, shares: 1500, reach: 22000 },
    { name: 'Sun', likes: 4300, comments: 2100, shares: 1400, reach: 19000 },
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
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
          <Area
            type="monotone"
            dataKey="likes"
            stroke="#ef4444"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorLikes)"
            name="Likes"
          />
          <Area
            type="monotone"
            dataKey="comments"
            stroke="#22c55e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorComments)"
            name="Comments"
          />
          <Area
            type="monotone"
            dataKey="shares"
            stroke="#a855f7"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorShares)"
            name="Shares"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
