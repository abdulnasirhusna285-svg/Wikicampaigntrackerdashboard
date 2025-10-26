import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { TimeSeriesChart } from "./TimeSeriesChart";
import { Award, TrendingUp, Edit3, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Contributor {
  id: number;
  name: string;
  username: string;
  edits: number;
  articles: number;
  bytesAdded: number;
  rank: number;
}

const topContributors: Contributor[] = [
  { id: 1, name: "Sarah Chen", username: "schen_wiki", edits: 1245, articles: 89, bytesAdded: 345600, rank: 1 },
  { id: 2, name: "Marcus Rodriguez", username: "mrodriguez", edits: 1098, articles: 76, bytesAdded: 298400, rank: 2 },
  { id: 3, name: "Aisha Patel", username: "apatel", edits: 967, articles: 68, bytesAdded: 267800, rank: 3 },
  { id: 4, name: "James Wilson", username: "jwilson", edits: 834, articles: 54, bytesAdded: 234500, rank: 4 },
  { id: 5, name: "Lisa Anderson", username: "landerson", edits: 789, articles: 51, bytesAdded: 198700, rank: 5 },
  { id: 6, name: "David Kim", username: "dkim", edits: 723, articles: 47, bytesAdded: 187600, rank: 6 },
  { id: 7, name: "Emily Martinez", username: "emartinez", edits: 656, articles: 42, bytesAdded: 156300, rank: 7 },
  { id: 8, name: "Robert Taylor", username: "rtaylor", edits: 612, articles: 39, bytesAdded: 145200, rank: 8 },
];

const contributorTrendData = [
  { month: "May", newContributors: 12, activeContributors: 45 },
  { month: "Jun", newContributors: 18, activeContributors: 58 },
  { month: "Jul", newContributors: 15, activeContributors: 67 },
  { month: "Aug", newContributors: 22, activeContributors: 82 },
  { month: "Sep", newContributors: 28, activeContributors: 98 },
  { month: "Oct", newContributors: 35, activeContributors: 124 },
];

const editsByContributor = topContributors.slice(0, 8).map(c => ({
  name: c.username,
  edits: c.edits
}));

export function ContributorAnalytics() {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Badge className="bg-yellow-500 hover:bg-yellow-600">🥇 #1</Badge>;
    if (rank === 2) return <Badge className="bg-gray-400 hover:bg-gray-500">🥈 #2</Badge>;
    if (rank === 3) return <Badge className="bg-amber-600 hover:bg-amber-700">🥉 #3</Badge>;
    return <Badge variant="outline">#{rank}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Contributor Analytics</h1>
        <p className="text-gray-600 mt-1">Track top contributors and engagement trends</p>
      </div>

      {/* Contributor Trends */}
      <div className="grid gap-4 lg:grid-cols-2">
        <TimeSeriesChart
          title="Contributor Growth"
          description="New and active contributors over time"
          data={contributorTrendData}
          dataKeys={[
            { key: "newContributors", color: "#3b82f6", name: "New Contributors" },
            { key: "activeContributors", color: "#10b981", name: "Active Contributors" },
          ]}
          type="line"
        />

        <Card>
          <CardHeader>
            <CardTitle>Edits by Top Contributors</CardTitle>
            <CardDescription>Total edits from leading contributors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={editsByContributor}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px'
                  }}
                />
                <Bar dataKey="edits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Contributors List */}
      <Card>
        <CardHeader>
          <CardTitle>Top Contributors</CardTitle>
          <CardDescription>Leaderboard of most active contributors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topContributors.map((contributor) => (
              <div
                key={contributor.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {getRankBadge(contributor.rank)}
                    <Avatar>
                      <AvatarFallback>{getInitials(contributor.name)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>{contributor.name}</span>
                      {contributor.rank <= 3 && <Award className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <p className="text-sm text-gray-600">@{contributor.username}</p>
                  </div>
                </div>
                <div className="flex gap-8 text-sm">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Edit3 className="h-3 w-3" />
                      <span className="text-xs">Edits</span>
                    </div>
                    <div>{contributor.edits.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FileText className="h-3 w-3" />
                      <span className="text-xs">Articles</span>
                    </div>
                    <div>{contributor.articles}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-gray-600">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs">Bytes</span>
                    </div>
                    <div>{(contributor.bytesAdded / 1000).toFixed(1)}K</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
