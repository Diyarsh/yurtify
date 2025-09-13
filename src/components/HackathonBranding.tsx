import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Clock, TrendingUp, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HackathonBranding = () => {
  const { t } = useLanguage();

  const metrics = [
    { icon: Zap, label: "Transaction Speed", value: "< 1s", color: "text-green-500" },
    { icon: Clock, label: "Uptime", value: "99.9%", color: "text-blue-500" },
    { icon: TrendingUp, label: "ROI", value: "12.5%", color: "text-purple-500" },
    { icon: Code, label: "Smart Contracts", value: "100% Secure", color: "text-orange-500" }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {/* Hackathon Badge */}
      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 shadow-lg animate-pulse">
        <Code className="w-4 h-4 mr-2" />
        {t('hackathon.built')}
      </Badge>

      {/* Performance Metrics */}
      <Card className="p-4 bg-background/95 backdrop-blur-sm border border-primary/20 shadow-lg">
        <h4 className="text-sm font-semibold mb-3 text-center">{t('hackathon.performance')}</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <metric.icon className={`w-3 h-3 ${metric.color}`} />
                <span className={`font-bold ${metric.color}`}>{metric.value}</span>
              </div>
              <div className="text-muted-foreground text-[10px]">{metric.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};