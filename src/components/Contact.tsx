import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-muted/30" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get in touch
        </h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Let's work together</CardTitle>
            <CardDescription>
              Looking for a senior developer? Contact me through my email or phone below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:altidala@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    altidala@hotmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+5547992568021" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (47) 99256-8021
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Brazil</p>
                </div>
              </div>
			  
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Whatsapp</p>
                  <a href="https://api.whatsapp.com/send/?phone=5547992568021&text=Ol%C3%A1+Altieri%2C+vim+atrav%C3%A9s+do+seu+portfólio%2C+teria+um+momento+para+conversarmos%3F++&type=phone_number&app_absent=0"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (47) 99256-8021
                  </a>
                </div>
              </div>
            </div>

            <Button className="w-full" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5547992568021&text=Ol%C3%A1+Altieri%2C+vim+atrav%C3%A9s+do+seu+portfólio%2C+teria+um+momento+para+conversarmos%3F++&type=phone_number&app_absent=0">
                Send Message
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
