import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Search, Calendar, Users, Edit3, Download } from "lucide-react";

interface Campaign {
  id: number;
  name: string;
  status: "active" | "completed" | "upcoming";
  startDate: string;
  endDate: string;
  participants: number;
  totalEdits: number;
  articlesEdited: number;
}

const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Women in Science 2025",
    status: "active",
    startDate: "2025-10-01",
    endDate: "2025-11-30",
    participants: 52,
    totalEdits: 1234,
    articlesEdited: 245
  },
  {
    id: 2,
    name: "Asia Art Month",
    status: "active",
    startDate: "2025-10-15",
    endDate: "2025-11-15",
    participants: 38,
    totalEdits: 892,
    articlesEdited: 178
  },
  {
    id: 3,
    name: "Climate Action Edit-a-thon",
    status: "active",
    startDate: "2025-09-20",
    endDate: "2025-12-20",
    participants: 67,
    totalEdits: 1567,
    articlesEdited: 312
  },
  {
    id: 4,
    name: "Indigenous Languages",
    status: "active",
    startDate: "2025-10-10",
    endDate: "2025-10-31",
    participants: 24,
    totalEdits: 445,
    articlesEdited: 89
  },
  {
    id: 5,
    name: "Black History Month 2025",
    status: "completed",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    participants: 89,
    totalEdits: 2345,
    articlesEdited: 456
  },
  {
    id: 6,
    name: "Pride Month Edit-a-thon",
    status: "upcoming",
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    participants: 0,
    totalEdits: 0,
    articlesEdited: 0
  },
];

export function CampaignList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "completed" | "upcoming">("all");

  const filteredCampaigns = mockCampaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Campaign["status"]) => {
    const variants = {
      active: "default",
      completed: "secondary",
      upcoming: "outline"
    } as const;
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Campaigns</h1>
        <p className="text-gray-600 mt-1">View and manage all Wikipedia campaigns</p>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign List</CardTitle>
          <CardDescription>Browse ongoing and past campaigns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "active" ? "default" : "outline"}
                onClick={() => setStatusFilter("active")}
              >
                Active
              </Button>
              <Button
                variant={statusFilter === "completed" ? "default" : "outline"}
                onClick={() => setStatusFilter("completed")}
              >
                Completed
              </Button>
              <Button
                variant={statusFilter === "upcoming" ? "default" : "outline"}
                onClick={() => setStatusFilter("upcoming")}
              >
                Upcoming
              </Button>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {/* Campaign Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Participants</TableHead>
                  <TableHead className="text-right">Total Edits</TableHead>
                  <TableHead className="text-right">Articles</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCampaigns.map((campaign) => (
                  <TableRow key={campaign.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell>{campaign.name}</TableCell>
                    <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-3 w-3" />
                        {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Users className="h-3 w-3 text-gray-500" />
                        {campaign.participants}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Edit3 className="h-3 w-3 text-gray-500" />
                        {campaign.totalEdits.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{campaign.articlesEdited}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
