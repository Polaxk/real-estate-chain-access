
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { 
  FileCheck2, 
  UserCircle2, 
  Building2, 
  Map, 
  ClipboardCheck,
  Shield
} from "lucide-react";

const GovernmentLanding = () => {
  return (
    <div className="min-h-screen bg-navy py-8 px-4 md:px-8">
      {/* Logo */}
      <div className="mb-12">
        <Logo />
      </div>

      {/* Hero Section */}
      <section className="glass-panel px-6 py-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in">
          Government Property Management Portal
        </h1>
        <p className="text-xl text-primary/80 mb-8 animate-fade-in">
          Secure Administrative Access for Property Management
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="btn-primary">View Pending Requests</Button>
          <Button className="btn-secondary">Generate Reports</Button>
        </div>
      </section>

      {/* Administrative Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Administrative Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-panel p-6 hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
              </div>
              <p className="text-primary/80">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* System Status */}
      <section className="glass-panel p-6 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 glass-panel">
            <p className="text-primary font-semibold">Pending Verifications</p>
            <p className="text-2xl text-primary">23</p>
          </div>
          <div className="p-4 glass-panel">
            <p className="text-primary font-semibold">Active Properties</p>
            <p className="text-2xl text-primary">1,234</p>
          </div>
          <div className="p-4 glass-panel">
            <p className="text-primary font-semibold">Daily Transactions</p>
            <p className="text-2xl text-primary">45</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">Admin Guide</a>
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">Support</a>
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">Security Policies</a>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <UserCircle2 className="w-8 h-8 text-primary" />,
    title: "User Management",
    description: "Manage civilian accounts and access permissions."
  },
  {
    icon: <FileCheck2 className="w-8 h-8 text-primary" />,
    title: "Verification Requests",
    description: "Review and process property verification requests."
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Property Registry",
    description: "Maintain and update the central property database."
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Zoning Management",
    description: "Update and manage property zoning regulations."
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    title: "Audit Logs",
    description: "Track and review all system activities and changes."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Security Controls",
    description: "Manage system security and access protocols."
  }
];

export default GovernmentLanding;
