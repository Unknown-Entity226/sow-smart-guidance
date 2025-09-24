import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

interface AIInsight {
  type: "recommendation" | "trend" | "alert" | "tip";
  title: string;
  description: string;
  confidence: number;
}

const mockInsights: AIInsight[] = [
  {
    type: "recommendation",
    title: "Optimal Planting Window",
    description: "Based on weather patterns, plant wheat between Oct 15-30 for maximum yield",
    confidence: 92
  },
  {
    type: "trend",
    title: "Market Price Surge",
    description: "Tomato prices expected to rise 25% in next quarter due to seasonal demand",
    confidence: 87
  },
  {
    type: "alert",
    title: "Disease Risk Alert",
    description: "High humidity levels indicate increased risk of fungal infections",
    confidence: 94
  },
  {
    type: "tip",
    title: "Fertilizer Optimization",
    description: "Reduce nitrogen by 15% and increase potassium for your soil type",
    confidence: 89
  }
];

const getInsightIcon = (type: string) => {
  switch (type) {
    case "recommendation": return <Lightbulb className="h-5 w-5 text-primary" />;
    case "trend": return <TrendingUp className="h-5 w-5 text-accent-bright" />;
    case "alert": return <AlertTriangle className="h-5 w-5 text-warning" />;
    case "tip": return <Brain className="h-5 w-5 text-success" />;
    default: return <Brain className="h-5 w-5 text-primary" />;
  }
};

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 90) return "bg-success";
  if (confidence >= 80) return "bg-primary";
  if (confidence >= 70) return "bg-warning";
  return "bg-muted";
};

export function AIInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">AI-Powered Insights</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {mockInsights.map((insight, index) => (
          <Card key={index} className="hover-lift glass-effect">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getInsightIcon(insight.type)}
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </div>
                <Badge 
                  className={`${getConfidenceColor(insight.confidence)} text-white`}
                >
                  {insight.confidence}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}