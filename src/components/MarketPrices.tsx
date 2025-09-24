import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CropPrice {
  name: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  market: string;
}

interface CategoryData {
  category: string;
  crops: CropPrice[];
}

const marketData: CategoryData[] = [
  {
    category: "Cereals",
    crops: [
      {
        name: "Wheat",
        currentPrice: 2150,
        previousPrice: 2100,
        unit: "per quintal",
        market: "Delhi Mandi"
      },
      {
        name: "Rice (Basmati)",
        currentPrice: 3200,
        previousPrice: 3180,
        unit: "per quintal",
        market: "Punjab Mandi"
      },
      {
        name: "Maize",
        currentPrice: 1850,
        previousPrice: 1900,
        unit: "per quintal",
        market: "Maharashtra Mandi"
      }
    ]
  },
  {
    category: "Pulses",
    crops: [
      {
        name: "Chana (Chickpea)",
        currentPrice: 4500,
        previousPrice: 4400,
        unit: "per quintal",
        market: "Rajasthan Mandi"
      },
      {
        name: "Moong Dal",
        currentPrice: 7200,
        previousPrice: 7350,
        unit: "per quintal",
        market: "Haryana Mandi"
      },
      {
        name: "Arhar (Tur)",
        currentPrice: 6800,
        previousPrice: 6750,
        unit: "per quintal",
        market: "Karnataka Mandi"
      }
    ]
  },
  {
    category: "Cash Crops",
    crops: [
      {
        name: "Cotton",
        currentPrice: 5800,
        previousPrice: 5750,
        unit: "per quintal",
        market: "Gujarat Mandi"
      },
      {
        name: "Sugarcane",
        currentPrice: 350,
        previousPrice: 340,
        unit: "per quintal",
        market: "Uttar Pradesh Mandi"
      },
      {
        name: "Groundnut",
        currentPrice: 5200,
        previousPrice: 5300,
        unit: "per quintal",
        market: "Andhra Pradesh Mandi"
      }
    ]
  },
  {
    category: "Vegetables",
    crops: [
      {
        name: "Tomato",
        currentPrice: 25,
        previousPrice: 30,
        unit: "per kg",
        market: "Bengaluru Market"
      },
      {
        name: "Onion",
        currentPrice: 18,
        previousPrice: 15,
        unit: "per kg",
        market: "Nashik Market"
      },
      {
        name: "Potato",
        currentPrice: 12,
        previousPrice: 14,
        unit: "per kg",
        market: "West Bengal Market"
      }
    ]
  }
];

const getTrendIcon = (current: number, previous: number) => {
  if (current > previous) {
    return <TrendingUp className="h-4 w-4 text-green-500" />;
  } else if (current < previous) {
    return <TrendingDown className="h-4 w-4 text-red-500" />;
  }
  return null;
};

const getPriceChangeColor = (current: number, previous: number) => {
  if (current > previous) return "text-green-600";
  if (current < previous) return "text-red-600";
  return "text-muted-foreground";
};

export function MarketPrices() {
  return (
    <div className="container mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">Latest Market Prices</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay updated with real-time market prices for popular crops across different categories. 
          Prices are updated daily from major mandis across India.
        </p>
        <Badge variant="secondary" className="animate-pulse">
          Last Updated: Today, 6:00 AM
        </Badge>
      </div>

      <div className="grid gap-8">
        {marketData.map((category) => (
          <Card key={category.category} className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                {category.category}
                <Badge variant="outline">{category.crops.length} crops</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {category.crops.map((crop) => (
                  <Card key={crop.name} className="border-muted hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{crop.name}</h3>
                          {getTrendIcon(crop.currentPrice, crop.previousPrice)}
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">
                            ₹{crop.currentPrice.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">{crop.unit}</div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Previous:</span>
                          <span className={getPriceChangeColor(crop.currentPrice, crop.previousPrice)}>
                            ₹{crop.previousPrice.toLocaleString()}
                          </span>
                        </div>

                        <div className="pt-2 border-t border-muted">
                          <div className="text-xs text-muted-foreground">{crop.market}</div>
                        </div>

                        <div className="text-xs">
                          <span className={`font-medium ${getPriceChangeColor(crop.currentPrice, crop.previousPrice)}`}>
                            {crop.currentPrice > crop.previousPrice ? '+' : ''}
                            {((crop.currentPrice - crop.previousPrice) / crop.previousPrice * 100).toFixed(1)}%
                          </span>
                          <span className="text-muted-foreground ml-1">from yesterday</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Need More Market Information?</h3>
          <p className="text-muted-foreground">
            Contact our support team for detailed market analysis and price predictions for your specific crops.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}