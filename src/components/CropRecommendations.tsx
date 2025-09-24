import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  AlertTriangle, 
  Leaf,
  Droplets,
  Sun,
  Shield
} from "lucide-react";

interface Crop {
  id: string;
  name: string;
  variety: string;
  suitability: number;
  msp: string;
  marketRate: string;
  investment: string;
  duration: string;
  season: string;
  waterNeed: string;
  diseases: string[];
  advantages: string[];
}

interface CropRecommendationsProps {
  farmerData: any;
  onSelectCrop: (crop: Crop) => void;
}

const mockCrops: Crop[] = [
  {
    id: "wheat-hd2967",
    name: "Wheat",
    variety: "HD 2967",
    suitability: 92,
    msp: "₹2,125/quintal",
    marketRate: "₹2,300-2,400/quintal",
    investment: "₹35,000-40,000/acre",
    duration: "120-130 days",
    season: "Rabi",
    waterNeed: "300-350mm",
    diseases: ["Rust", "Smut", "Aphids"],
    advantages: ["High yield", "Disease resistant", "Good market demand"]
  },
  {
    id: "rice-pusa1121",
    name: "Basmati Rice",
    variety: "Pusa 1121",
    suitability: 88,
    msp: "₹2,040/quintal",
    marketRate: "₹4,500-5,500/quintal",
    investment: "₹45,000-55,000/acre",
    duration: "130-140 days",
    season: "Kharif",
    waterNeed: "1200-1500mm",
    diseases: ["Blast", "Sheath Blight", "BPH"],
    advantages: ["Premium variety", "Export quality", "High price"]
  },
  {
    id: "cotton-bt",
    name: "Cotton",
    variety: "Bt Cotton",
    suitability: 78,
    msp: "₹6,080/quintal",
    marketRate: "₹6,200-6,800/quintal",
    investment: "₹25,000-30,000/acre",
    duration: "180-200 days",
    season: "Kharif",
    waterNeed: "500-800mm",
    diseases: ["Bollworm", "Whitefly", "Jassids"],
    advantages: ["Pest resistant", "Good fiber quality", "Stable demand"]
  }
];

const getSuitabilityColor = (score: number) => {
  if (score >= 90) return "text-success";
  if (score >= 80) return "text-primary";
  if (score >= 70) return "text-warning";
  return "text-muted-foreground";
};

export function CropRecommendations({ farmerData, onSelectCrop }: CropRecommendationsProps) {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient mb-2">
          Recommended Crops for {farmerData.name}
        </h2>
        <p className="text-muted-foreground">
          Based on your farm profile: {farmerData.location} • {farmerData.farmSize} acres
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {mockCrops.map((crop, index) => (
          <Card 
            key={crop.id} 
            className="hover-lift animate-fade-in glass-effect border-l-4 border-l-primary"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{crop.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{crop.variety}</p>
                </div>
                <Badge variant="secondary" className="bg-primary/10">
                  {crop.season}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Suitability</span>
                  <span className={`font-bold ${getSuitabilityColor(crop.suitability)}`}>
                    {crop.suitability}%
                  </span>
                </div>
                <Progress value={crop.suitability} className="h-2" />
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-success" />
                  <div>
                    <p className="font-medium">MSP</p>
                    <p className="text-muted-foreground">{crop.msp}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent-bright" />
                  <div>
                    <p className="font-medium">Market Rate</p>
                    <p className="text-muted-foreground">{crop.marketRate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-warning" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground">{crop.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-accent-bright" />
                  <div>
                    <p className="font-medium">Water Need</p>
                    <p className="text-muted-foreground">{crop.waterNeed}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">Key Advantages</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {crop.advantages.map((advantage, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {advantage}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">Common Diseases</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {crop.diseases.map((disease, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-warning/10">
                      {disease}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => onSelectCrop(crop)}
                className="w-full gradient-success text-white hover:opacity-90"
              >
                <Shield className="h-4 w-4 mr-2" />
                View Detailed Guide
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}