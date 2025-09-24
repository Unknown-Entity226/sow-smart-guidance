import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FarmerForm } from "@/components/FarmerForm";
import { CropRecommendations } from "@/components/CropRecommendations";
import { CropDetails } from "@/components/CropDetails";
import { AIInsights } from "@/components/AIInsights";
import { MarketPrices } from "@/components/MarketPrices";
import { Support } from "@/components/Support";

type AppState = "hero" | "form" | "recommendations" | "crop-details" | "market" | "support";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("hero");
  const [farmerData, setFarmerData] = useState<any>(null);
  const [selectedCrop, setSelectedCrop] = useState<any>(null);

  const handleGetStarted = () => {
    setCurrentState("form");
  };

  const handleFormSubmit = (data: any) => {
    setFarmerData(data);
    setCurrentState("recommendations");
  };

  const handleCropSelect = (crop: any) => {
    setSelectedCrop(crop);
    setCurrentState("crop-details");
  };

  const handleBackToRecommendations = () => {
    setCurrentState("recommendations");
  };

  const handleNavigation = (section: string) => {
    switch (section) {
      case "home":
        setCurrentState("hero");
        break;
      case "recommendations":
        if (farmerData) {
          setCurrentState("recommendations");
        } else {
          setCurrentState("form");
        }
        break;
      case "market":
        setCurrentState("market");
        break;
      case "support":
        setCurrentState("support");
        break;
      default:
        setCurrentState("hero");
    }
  };

  const renderContent = () => {
    switch (currentState) {
      case "hero":
        return <Hero onGetStarted={handleGetStarted} />;
      case "form":
        return (
          <div className="min-h-screen py-20 px-4">
            <FarmerForm onSubmit={handleFormSubmit} />
          </div>
        );
      case "recommendations":
        return (
          <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto space-y-12">
              <CropRecommendations 
                farmerData={farmerData} 
                onSelectCrop={handleCropSelect} 
              />
              <AIInsights />
            </div>
          </div>
        );
      case "crop-details":
        return (
          <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
              <CropDetails 
                crop={selectedCrop} 
                onBack={handleBackToRecommendations} 
              />
            </div>
          </div>
        );
      case "market":
        return (
          <div className="min-h-screen py-20 px-4">
            <MarketPrices />
          </div>
        );
      case "support":
        return (
          <div className="min-h-screen py-20 px-4">
            <Support />
          </div>
        );
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigation} currentState={currentState} />
      {renderContent()}
    </div>
  );
};

export default Index;
