
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { 
  Search,
  FileText,
  Building2,
  Map,
  ScrollText
} from "lucide-react";

const CivilianLanding = () => {
  return (
    <div className="min-h-screen bg-navy p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
          <p className="text-primary/70 text-sm">Here's your latest activity</p>
        </div>
        <Logo className="w-24" />
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search property records..."
            className="form-input pl-12 py-2.5"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickAccess.map((item, index) => (
          <Card 
            key={index}
            className="glass-panel p-4 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-navy-light">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-primary/70">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <section className="glass-panel p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-primary/70">{activity.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  activity.status === 'Pending' 
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {activity.status}
                </span>
                <Button variant="ghost" size="icon">
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const quickAccess = [
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: "Property Records",
    description: "View and verify property ownership records"
  },
  {
    icon: <Building2 className="w-5 h-5 text-primary" />,
    title: "Smart Contracts",
    description: "Manage property transactions securely"
  },
  {
    icon: <Map className="w-5 h-5 text-primary" />,
    title: "Property Map",
    description: "Interactive GIS mapping system"
  },
  {
    icon: <ScrollText className="w-5 h-5 text-primary" />,
    title: "Legal & Mortgage",
    description: "Access legal and financial services"
  }
];

const recentActivity = [
  {
    title: "Property Verification Request",
    time: "2 hours ago",
    status: "Pending"
  },
  {
    title: "Smart Contract #1234",
    time: "1 day ago",
    status: "Completed"
  }
];

export default CivilianLanding;
