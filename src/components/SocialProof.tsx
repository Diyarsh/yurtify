import { Users, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface SocialProofProps {
  ownersCount: number;
  className?: string;
}

export const SocialProof = ({ ownersCount, className = "" }: SocialProofProps) => {
  const { t } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-300/20">
        <Users className="w-3 h-3 mr-1" />
        {t('features.social').replace('{count}', ownersCount.toString())}
      </Badge>
      {ownersCount > 100 && (
        <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-300/20">
          <TrendingUp className="w-3 h-3 mr-1" />
          Hot Property
        </Badge>
      )}
      {ownersCount > 200 && (
        <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-300/20">
          <Star className="w-3 h-3 mr-1" />
          Community Favorite
        </Badge>
      )}
    </div>
  );
};