import { Button } from "@/components/ui/button";
import { Eye, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface ARViewButtonProps {
  propertyTitle: string;
  className?: string;
}

export const ARViewButton = ({ propertyTitle, className = "" }: ARViewButtonProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleARView = () => {
    toast({
      title: "AR Experience",
      description: `Virtual tour of ${propertyTitle} would open in AR mode. Feature coming soon!`,
      duration: 3000,
    });
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleARView}
      className={`bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/20 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 ${className}`}
    >
      <Eye className="w-4 h-4 mr-2" />
      <Smartphone className="w-3 h-3 mr-1" />
      {t('features.ar')}
    </Button>
  );
};