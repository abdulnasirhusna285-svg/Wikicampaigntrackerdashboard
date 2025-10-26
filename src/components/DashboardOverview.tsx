import { StatCard } from "./StatCard";
import { TimeSeriesChart } from "./TimeSeriesChart";
import { Edit3, Users, FileText, Database, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

// Mock data for demonstration
const contributionData = [
  { date: "Oct 1", edits: 245, users: 18, articles: 12 },
  { date: "Oct 5", edits: 312, users: 24, articles: 18 },
  { date: "Oct 9", edits: 289, users: 21, articles: 15 },
  { date: "Oct 13", edits: 456, users: 32, articles: 24 },
  { date: "Oct 17", edits: 523, users: 38, articles: 28 },
  { date: "Oct 21", edits: 612, users: 45, articles: 35 },
  { date: "Oct 25", edits: 678, users: 52, articles: 42 },
];

const topCampaigns = [
  { name: "Women in Science 2025", progress: 78, edits: 1234, target: 1500 },
  { name: "Asia Art Month", progress: 65, edits: 892, target: 1200 },
  { name: "Climate Action Edit-a-thon", progress: 45, edits: 567, target: 1000 },
  { name: "Indigenous Languages", progress: 89, edits: 445, target: 500 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Monitor your campaign performance and contribution metrics</p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Edits"
          value="12,456"
          change="+18.2% from last month"
          changeType="positive"
          icon={Edit3}
        />
        <StatCard
          title="Active Users"
          value="248"
          change="+12.5% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatCard
          title="Articles Edited"
          value="1,834"
          change="+8.1% from last month"
          changeType="positive"
          icon={FileText}
        />
        <StatCard
          title="Bytes Added"
          value="2.4M"
          change="+22.3% from last month"
          changeType="positive"
          icon={Database}
        />
      </div>

      {/* Time Series Chart */}
      <TimeSeriesChart
        title="Contributions Over Time"
        description="Track edits, active users, and articles created across all campaigns"
        data={contributionData}
        dataKeys={[
          { key: "edits", color: "#3b82f6", name: "Edits" },
          { key: "users", color: "#10b981", name: "Active Users" },
          { key: "articles", color: "#f59e0b", name: "Articles" },
        ]}
        type="area"
      />

      {/* Active Campaigns Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Active Campaigns Progress</CardTitle>
          <CardDescription>Current status of ongoing campaigns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {topCampaigns.map((campaign, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gray-500" />
                  <span>{campaign.name}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {campaign.edits} / {campaign.target} edits
                </span>
              </div>
              <Progress value={campaign.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
