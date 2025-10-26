import { useState } from "react";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { LayoutDashboard, Target, Users, BarChart3, Settings, Menu, Bell } from "lucide-react";
import { DashboardOverview } from "./components/DashboardOverview";
import { CampaignList } from "./components/CampaignList";
import { ContributorAnalytics } from "./components/ContributorAnalytics";
import { SettingsPage } from "./components/SettingsPage";

type Page = "dashboard" | "campaigns" | "contributors" | "analytics" | "settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems = [
    { id: "dashboard" as Page, label: "Dashboard", icon: LayoutDashboard },
    { id: "campaigns" as Page, label: "Campaigns", icon: Target },
    { id: "contributors" as Page, label: "Contributors", icon: Users },
    { id: "analytics" as Page, label: "Analytics", icon: BarChart3 },
    { id: "settings" as Page, label: "Settings", icon: Settings },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardOverview />;
      case "campaigns":
        return <CampaignList />;
      case "contributors":
        return <ContributorAnalytics />;
      case "analytics":
        return <DashboardOverview />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl">WikiCampaign Tracker</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:sticky top-[57px] left-0 z-40 h-[calc(100vh-57px)] w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out`}
        >
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => {
                    setCurrentPage(item.id);
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false);
                    }
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
