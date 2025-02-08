
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { 
  Search,
  UserCircle2,
  FileCheck2,
  FileContract,
  Map,
  ScrollText
} from "lucide-react";

const CivilianLanding = () => {
  return (
    <div className="min-h-screen bg-navy py-8 px-4 md:px-8">
      {/* Logo */}
      <div className="mb-12">
        <Logo />
      </div>

      {/* Hero Section */}
      <section className="glass-panel px-6 py-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in">
          Revolutionizing Real Estate with Blockchain
        </h1>
        <p className="text-xl text-primary/80 mb-8 animate-fade-in">
          Secure, Transparent, and Efficient Property Management
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Property Records"
              className="form-input pl-12"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="btn-primary">Verify Ownership</Button>
          <Button className="btn-secondary">Get Started</Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Key Features</h2>
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

      {/* Map Preview Section */}
      <section className="glass-panel p-6 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Interactive Property Map</h2>
        <div className="h-[400px] bg-navy-light rounded-lg border border-primary/20">
          {/* Map component will be added here */}
          <div className="h-full flex items-center justify-center text-primary/50">
            Interactive Map Coming Soon
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">FAQs</a>
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="text-primary/80 hover:text-primary transition-colors">Legal Information</a>
        </div>
      </footer>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: <UserCircle2 className="w-8 h-8 text-primary" />,
    title: "User Dashboard",
    description: "Access your personal dashboard to manage properties and transactions."
  },
  {
    icon: <FileCheck2 className="w-8 h-8 text-primary" />,
    title: "Property & Ownership Verification",
    description: "Verify property ownership with blockchain-backed authentication."
  },
  {
    icon: <FileContract className="w-8 h-8 text-primary" />,
    title: "Smart Contract Transactions",
    description: "Execute and manage property transactions using smart contracts."
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Interactive Property Map",
    description: "View and explore property locations with our GIS integration."
  },
  {
    icon: <ScrollText className="w-8 h-8 text-primary" />,
    title: "Legal Compliance & Mortgage",
    description: "Stay compliant with automated legal checks and mortgage tracking."
  }
];

export default CivilianLanding;
