import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  DollarSign,
  Calendar,
  Droplets,
  Shield,
  Leaf,
  AlertTriangle,
  Building,
  Users,
  ShoppingCart,
  Truck
} from "lucide-react";

interface CropDetailsProps {
  crop: any;
  onBack: () => void;
}

const fertilizers = [
  { name: "Urea", timing: "Sowing + 45 days", quantity: "100kg/acre", cost: "₹800" },
  { name: "DAP", timing: "At sowing", quantity: "50kg/acre", cost: "₹1,500" },
  { name: "Potash", timing: "Before flowering", quantity: "25kg/acre", cost: "₹600" }
];

const subsidies = [
  { scheme: "PM-KISAN", amount: "₹6,000/year", eligibility: "All farmers" },
  { scheme: "Soil Health Card", amount: "Free testing", eligibility: "All farmers" },
  { scheme: "Fertilizer Subsidy", amount: "40-50% off", eligibility: "Valid KCC holders" }
];

const marketplaces = [
  { name: "eNAM", type: "Government", commission: "1-2%", reach: "National" },
  { name: "FarmEasy", type: "Private", commission: "3-5%", reach: "Regional" },
  { name: "Kisan Network", type: "B2B", commission: "2-4%", reach: "Pan-India" }
];

const ngos = [
  { name: "AgroStar Foundation", service: "Quality seeds", discount: "20-30%" },
  { name: "Dharamitra", service: "Organic inputs", discount: "25%" },
  { name: "BAIF Development", service: "Training & seeds", discount: "15-20%" }
];

export function CropDetails({ crop, onBack }: CropDetailsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recommendations
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gradient">{crop.name}</h1>
          <p className="text-muted-foreground">Complete cultivation guide for {crop.variety}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-success" />
              Financial Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">MSP Rate</span>
                <span className="font-semibold text-success">{crop.msp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Market Rate</span>
                <span className="font-semibold">{crop.marketRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Investment</span>
                <span className="font-semibold text-warning">{crop.investment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Duration</span>
                <span className="font-semibold">{crop.duration}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-success text-white">Expected Profit</Badge>
              </div>
              <p className="text-2xl font-bold text-success">₹45,000-60,000/acre</p>
              <p className="text-xs text-muted-foreground">Based on current market rates</p>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Tabs defaultValue="cultivation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="cultivation">Cultivation</TabsTrigger>
              <TabsTrigger value="diseases">Diseases</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="cultivation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Fertilizer Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {fertilizers.map((fertilizer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{fertilizer.name}</p>
                          <p className="text-sm text-muted-foreground">{fertilizer.timing}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{fertilizer.quantity}</p>
                          <p className="text-sm text-success">{fertilizer.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diseases" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Disease Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {crop.diseases.map((disease: string, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-warning mb-2">{disease}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Common in {crop.season} season. Apply preventive measures early.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline">Fungicide spray</Badge>
                          <Badge variant="outline">Crop rotation</Badge>
                          <Badge variant="outline">Proper drainage</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent-bright" />
                      Government Subsidies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {subsidies.map((subsidy, index) => (
                        <div key={index} className="p-3 bg-accent/10 rounded-lg">
                          <p className="font-medium">{subsidy.scheme}</p>
                          <p className="text-sm text-success">{subsidy.amount}</p>
                          <p className="text-xs text-muted-foreground">{subsidy.eligibility}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-success" />
                      NGO Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ngos.map((ngo, index) => (
                        <div key={index} className="p-3 bg-success/10 rounded-lg">
                          <p className="font-medium">{ngo.name}</p>
                          <p className="text-sm">{ngo.service}</p>
                          <p className="text-xs text-success">{ngo.discount} discount</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    Direct Selling Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {marketplaces.map((marketplace, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div>
                          <p className="font-medium">{marketplace.name}</p>
                          <p className="text-sm text-muted-foreground">{marketplace.type} platform</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{marketplace.commission}</p>
                          <p className="text-xs text-muted-foreground">{marketplace.reach}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="h-4 w-4 text-accent-bright" />
                      <span className="font-medium">Harvest Notification</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You'll receive alerts 2 weeks before harvest with market prices and buyer contacts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}