import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Clock, Users, HelpCircle } from "lucide-react";

export function Support() {
  return (
    <div className="container mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">Get Support</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're here to help you with any questions about crop advisory, farming techniques, 
          or using our platform. Choose the best way to reach us.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Chatbot Support */}
        <Card className="animate-fade-in hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">AI Chatbot</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Get instant answers to your farming questions with our AI-powered chatbot. 
              Available 24/7 for immediate assistance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Available 24/7
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <HelpCircle className="h-4 w-4" />
                Instant responses
              </div>
            </div>
            <Button className="w-full" onClick={() => alert("Chatbot feature coming soon!")}>
              Start Chat
            </Button>
          </CardContent>
        </Card>

        {/* Email Support */}
        <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{animationDelay: '0.1s'}}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Email Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Send us detailed queries and get comprehensive solutions. 
              Perfect for complex farming issues or technical support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Response in 24 hours
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Expert agricultural team
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('mailto:support@cropguide.com?subject=CropGuide Support Request', '_blank')}
            >
              Email Us
            </Button>
            <p className="text-xs text-muted-foreground">support@cropguide.com</p>
          </CardContent>
        </Card>

        {/* Phone Support */}
        <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{animationDelay: '0.2s'}}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Phone Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Speak directly with our agricultural experts for urgent matters 
              or personalized guidance for your farming needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Mon-Sat: 9 AM - 6 PM
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Hindi & English support
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => window.open('tel:+911800123456', '_self')}
            >
              Call Now
            </Button>
            <p className="text-xs text-muted-foreground">+91 1800-123-456</p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card className="animate-fade-in" style={{animationDelay: '0.3s'}}>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">How accurate are the crop recommendations?</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes multiple factors including soil, climate, and market data to provide 
                  recommendations with 90%+ accuracy based on local agricultural conditions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Is the platform free to use?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, basic crop recommendations and market prices are completely free. 
                  Premium features like detailed analytics are available with subscription.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">How often are market prices updated?</h3>
                <p className="text-sm text-muted-foreground">
                  Market prices are updated daily at 6 AM with data from major mandis 
                  across India to ensure you have the latest information.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Can I get support in regional languages?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, our platform supports 22 Indian languages, and our phone support 
                  is available in Hindi and English with regional language support planned.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Do you provide subsidy information?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide information about government subsidies, schemes, 
                  and connect you with nearby NGOs and startups offering seeds at low prices.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">How do I track my crop progress?</h3>
                <p className="text-sm text-muted-foreground">
                  Create an account to track your crops, get harvest notifications, 
                  and receive personalized recommendations for your next planting cycle.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Emergency Agricultural Support
          </h3>
          <p className="text-red-700 dark:text-red-300 mb-4">
            For urgent crop diseases, pest attacks, or weather-related emergencies
          </p>
          <Button 
            variant="destructive" 
            onClick={() => window.open('tel:+911800987654', '_self')}
          >
            Emergency Helpline: +91 1800-987-654
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}