import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, CreditCard, Users, Clock, Tractor } from "lucide-react";

interface FarmerData {
  name: string;
  location: string;
  identityNo: string;
  farmSize: string;
  budget: string;
  workingMembers: string;
  cropHistory: string;
  machinery: string[];
}

interface FarmerFormProps {
  onSubmit: (data: FarmerData) => void;
}

const machineryOptions = [
  "Tractor", "Plough", "Seed Drill", "Harvester", 
  "Thresher", "Cultivator", "Disc Harrow", "Sprayer",
  "Irrigation System", "Weeder", "Rotavator"
];

export function FarmerForm({ onSubmit }: FarmerFormProps) {
  const [formData, setFormData] = useState<FarmerData>({
    name: "",
    location: "",
    identityNo: "",
    farmSize: "",
    budget: "",
    workingMembers: "",
    cropHistory: "",
    machinery: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleMachineryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      machinery: prev.machinery.includes(value) 
        ? prev.machinery.filter(m => m !== value)
        : [...prev.machinery, value]
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gradient">Farmer Registration</CardTitle>
        <p className="text-muted-foreground">
          Provide your details to get personalized crop recommendations
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                placeholder="Village, District, State"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="identity" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Identity Number
              </Label>
              <Input
                id="identity"
                value={formData.identityNo}
                onChange={(e) => setFormData(prev => ({...prev, identityNo: e.target.value}))}
                placeholder="Aadhaar / PAN / Voter ID"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="farmSize">Farm Size (in acres)</Label>
              <Select onValueChange={(value) => setFormData(prev => ({...prev, farmSize: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select farm size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 acres (Small)</SelectItem>
                  <SelectItem value="2-5">2-5 acres (Medium)</SelectItem>
                  <SelectItem value="5-10">5-10 acres (Large)</SelectItem>
                  <SelectItem value="10+">10+ acres (Very Large)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (₹)</Label>
              <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50000">₹0 - ₹50,000</SelectItem>
                  <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="200000+">₹2,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="members" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Working Members
              </Label>
              <Input
                id="members"
                type="number"
                value={formData.workingMembers}
                onChange={(e) => setFormData(prev => ({...prev, workingMembers: e.target.value}))}
                placeholder="Number of workers"
                min="1"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="history" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Crop History
            </Label>
            <Textarea
              id="history"
              value={formData.cropHistory}
              onChange={(e) => setFormData(prev => ({...prev, cropHistory: e.target.value}))}
              placeholder="List crops grown in last 2-3 years..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Tractor className="h-4 w-4" />
              Available Machinery
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {machineryOptions.map((machine) => (
                <div key={machine} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={machine}
                    checked={formData.machinery.includes(machine)}
                    onChange={() => handleMachineryChange(machine)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor={machine} className="text-sm">{machine}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full gradient-hero text-primary-foreground hover:opacity-90">
            Get Crop Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}