import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

interface AcceleratorCardProps {
  title: string;
  description: string;
  status: "Live" | "Coming Soon";
  personas: string[];
  onLaunch?: () => void;
}

export function AcceleratorCard({ title, description, status, personas, onLaunch }: AcceleratorCardProps) {
  const isLive = status === "Live";

  return (
    <Card className="group relative overflow-hidden bg-surface-elevated border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <CardHeader className="bg-gradient-primary text-white relative pb-4">
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary"
            className={isLive ? "bg-badge-live text-white hover:bg-badge-live/90" : "bg-badge-coming-soon text-white hover:bg-badge-coming-soon/90"}
          >
            {status}
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-white">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <CardDescription className="text-on-card mb-4 flex-1">
          {description}
        </CardDescription>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Relevant for:</p>
          <div className="flex flex-wrap gap-1">
            {personas.map((persona) => (
              <Badge key={persona} variant="outline" className="text-xs border-border text-on-card-secondary bg-muted">
                {persona}
              </Badge>
            ))}
          </div>
        </div>
        <Button 
          onClick={onLaunch}
          disabled={!isLive}
          className={`w-full transition-all duration-200 ${
            isLive 
              ? "bg-primary hover:bg-accent text-white shadow-soft hover:shadow-medium" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {isLive ? "Launch" : "Coming Soon"}
        </Button>
      </CardContent>
    </Card>
  );
}