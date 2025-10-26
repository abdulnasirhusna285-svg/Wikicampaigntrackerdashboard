# WikiCampaign Tracker

A comprehensive data-driven dashboard for monitoring and visualizing Wikipedia campaign performance. Track campaign metrics, view contribution trends, and understand community engagement patterns over time.

![WikiCampaign Tracker](https://img.shields.io/badge/Built%20with-React-61dafb?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38bdf8?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat&logo=typescript)

## 📋 Overview

WikiCampaign Tracker is designed for Wikipedia campaign organizers, contributors, and viewers to monitor campaign progress, analyze contributor engagement, and visualize editing patterns across multiple campaigns. The application provides real-time insights into campaign performance with intuitive charts, tables, and statistics.

## ✨ Features

### 🎯 Dashboard Overview
- **Key Performance Metrics**: Track total edits, active users, articles edited, and bytes added
- **Trend Visualization**: Interactive area and line charts showing contributions over time
- **Campaign Progress**: Real-time progress bars for active campaigns with goal tracking
- **Performance Indicators**: Month-over-month growth statistics

### 📊 Campaign Management
- **Campaign List**: Comprehensive table of all campaigns (active, completed, upcoming)
- **Advanced Filtering**: Search by campaign name and filter by status
- **Sortable Columns**: View campaigns by duration, participants, edits, and articles
- **Export Functionality**: Download campaign data as CSV for offline analysis
- **Status Badges**: Visual indicators for campaign status

### 👥 Contributor Analytics
- **Leaderboard**: Ranked list of top contributors with medals for top 3
- **Contributor Metrics**: Detailed stats including edits, articles, and bytes added
- **Growth Trends**: Line charts tracking new and active contributors over time
- **Engagement Visualization**: Bar charts showing edit distribution across contributors
- **User Profiles**: Avatar-based contributor cards with comprehensive statistics

### ⚙️ Settings & Customization
- **Profile Management**: Update display name, email, and timezone preferences
- **Dashboard Preferences**: Customize default date ranges and chart types
- **Notification Controls**: Toggle email notifications for various events
- **Data Export**: Export data in multiple formats (CSV, JSON, PDF)
- **API Access**: Manage API keys for external integrations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
├── App.tsx                          # Main application component with routing
├── components/
│   ├── CampaignList.tsx             # Campaign table with filtering and search
│   ├── ContributorAnalytics.tsx     # Contributor leaderboard and analytics
│   ├── DashboardOverview.tsx        # Main dashboard with stats and charts
│   ├── SettingsPage.tsx             # Settings interface with tabs
│   ├── StatCard.tsx                 # Reusable metric card component
│   ├── TimeSeriesChart.tsx          # Reusable chart component (line/area)
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component with fallback support
│   └── ui/                          # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── progress.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       └── ... (additional UI components)
└── styles/
    └── globals.css                   # Global styles and Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wikicampaign-tracker.git
cd wikicampaign-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 💡 Usage Guide

### Navigating the Dashboard

1. **Dashboard**: View overall campaign performance and key metrics
2. **Campaigns**: Browse all campaigns with filtering and search capabilities
3. **Contributors**: Analyze top contributors and engagement trends
4. **Analytics**: Deep dive into campaign data (currently mirrors dashboard)
5. **Settings**: Customize your preferences and manage integrations

### Viewing Campaign Details

- Click on any campaign row in the Campaign List to view detailed information
- Use the status filter buttons to view Active, Completed, or Upcoming campaigns
- Search for specific campaigns using the search bar
- Export campaign data using the "Export CSV" button

### Understanding Metrics

- **Total Edits**: Cumulative number of edits across all campaigns
- **Active Users**: Number of contributors who have made edits in the current period
- **Articles Edited**: Total number of unique articles modified
- **Bytes Added**: Total content added to Wikipedia in bytes

### Customizing Your Experience

Navigate to Settings to:
- Update your profile information
- Set your preferred timezone
- Configure default date ranges for reports
- Choose your preferred chart visualization style
- Manage email notification preferences
- Generate and manage API keys

## 🔧 Component Architecture

### Core Components

#### `App.tsx`
Main application shell with:
- Responsive sidebar navigation
- Top navigation bar with user profile
- Page routing logic
- Mobile-friendly hamburger menu

#### `DashboardOverview.tsx`
Displays:
- 4 summary stat cards
- Time-series chart for contributions
- Active campaign progress bars

#### `CampaignList.tsx`
Features:
- Searchable and filterable campaign table
- Status badges (active, completed, upcoming)
- Sortable columns
- Export functionality

#### `ContributorAnalytics.tsx`
Includes:
- Top contributor leaderboard with rankings
- Contributor growth trends
- Bar chart visualization
- Medal badges for top 3 contributors

#### `TimeSeriesChart.tsx`
Reusable chart component supporting:
- Line and area chart types
- Multiple data series
- Customizable colors and labels
- Responsive design

#### `StatCard.tsx`
Metric display card with:
- Title and value
- Icon support
- Change indicators (positive/negative)
- Optional descriptions

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) for primary actions and data
- **Success**: Green (#10b981) for positive trends
- **Warning**: Amber (#f59e0b) for alerts
- **Neutral**: Gray scales for backgrounds and text

### Typography
- System font stack with Tailwind's default typography
- Responsive font sizing via global CSS
- Consistent heading hierarchy

### Components
- Built on shadcn/ui for consistency
- Accessible by default (WCAG AA compliant)
- Fully responsive across all breakpoints

## 📊 Sample Data

The application currently uses mock data for demonstration purposes. Sample datasets include:

- **Campaigns**: 6 sample campaigns across different statuses
- **Contributors**: 8 top contributors with varying metrics
- **Time-Series Data**: 7 data points showing trends over time

### Integrating Real Data

To connect real Wikipedia campaign data:

1. Replace mock data arrays with API calls
2. Consider integrating with:
   - Wikipedia API
   - Wikimedia Event Platform
   - Custom backend service
   - Supabase for data persistence

## 🔮 Future Enhancements

- [ ] Real-time data synchronization
- [ ] User authentication and authorization
- [ ] Role-based access control (organizers, contributors, viewers)
- [ ] Campaign creation and management interface
- [ ] Advanced analytics with custom date ranges
- [ ] Data export in PDF format with charts
- [ ] Email digest notifications
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Collaborative features (comments, annotations)
- [ ] Integration with Wikimedia OAuth

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Figma Make](https://figma.com) AI-powered app builder
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Charts powered by [Recharts](https://recharts.org)
- Icons from [Lucide](https://lucide.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## 📧 Contact

For questions, feedback, or support, please open an issue on GitHub or contact the maintainers.

---

**Note**: This is a prototype application designed for demonstration purposes. For production use with real Wikipedia data, additional security measures, authentication, and data validation should be implemented.
