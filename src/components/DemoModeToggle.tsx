import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export const DemoModeToggle = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const toggleDemoMode = () => {
    setIsDemoMode(!isDemoMode);
    toast({
      title: isDemoMode ? "Demo Mode Disabled" : "Demo Mode Enabled",
      description: isDemoMode 
        ? "Switched back to live data" 
        : "Now showing enhanced demo data for presentation",
      duration: 2000,
    });
  };

  return (
    <div className="fixed top-20 left-4 z-40">
      <Button
        variant={isDemoMode ? "default" : "outline"}
        size="sm"
        onClick={toggleDemoMode}
        className={`${isDemoMode ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : ''} shadow-lg`}
      >
        {isDemoMode ? <Play className="w-4 h-4 mr-2" /> : <Monitor className="w-4 h-4 mr-2" />}
        {t('features.demoMode')}
      </Button>
      
      {isDemoMode && (
        <Badge className="ml-2 bg-purple-100 text-purple-700 animate-pulse">
          PRESENTATION MODE
        </Badge>
      )}
    </div>
  );
};