import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";
import RawMaterials from "@/components/RawMaterials";
import SareeInventory from "@/components/SareeInventory";
import Sales from "@/components/Sales";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "materials":
        return <RawMaterials />;
      case "sarees":
        return <SareeInventory />;
      case "sales":
        return <Sales />;
      case "workers":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Workers Management</h2>
            <p className="text-muted-foreground">Coming soon - Worker management module</p>
          </div>
        );
      case "machines":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Machine Management</h2>
            <p className="text-muted-foreground">Coming soon - Machine tracking module</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Reports & Analytics</h2>
            <p className="text-muted-foreground">Coming soon - Advanced reporting module</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="lg:pl-64">
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
