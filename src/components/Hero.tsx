import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Brain,
  Smartphone,
  Globe,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";
import cropsImage from "@/assets/crops-variety.jpg";
import smartFarmingImage from "@/assets/smart-farming.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Recommendations",
    description: "Smart crop suggestions based on your farm profile"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Market Intelligence",
    description: "Real-time MSP and market price tracking"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Disease Management",
    description: "Early warning and treatment solutions"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "22 Indian Languages",
    description: "Full multilingual support for all farmers"
  }
];

const stats = [
  { label: "Active Farmers", value: "50,000+", icon: <Users className="h-5 w-5" /> },
  { label: "Crop Varieties", value: "200+", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Success Rate", value: "94%", icon: <Shield className="h-5 w-5" /> },
  { label: "Avg. Profit Increase", value: "35%", icon: <BarChart3 className="h-5 w-5" /> }
];

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern farmer with technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                🚀 Smart India Hackathon 2025
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Smart Farming</span><br />
                Made Simple
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get AI-powered crop recommendations, market insights, and complete farming guidance in your local language.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted}
                size="lg" 
                className="gradient-hero text-primary-foreground hover:opacity-90 text-lg px-8"
              >
                Start Farming Smart
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Smartphone className="h-5 w-5 mr-2" />
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-effect animate-scale-in hover-lift">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center text-primary mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Visual Elements */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="overflow-hidden hover-lift">
                <img 
                  src={cropsImage} 
                  alt="Variety of crops" 
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-medium">200+ Crop Varieties</p>
                  <p className="text-xs text-muted-foreground">Comprehensive database</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover-lift">
                <img 
                  src={smartFarmingImage} 
                  alt="Smart farming technology" 
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-medium">AI Technology</p>
                  <p className="text-xs text-muted-foreground">Data-driven insights</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent-bright/20 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-success/20 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
    </section>
  );
}