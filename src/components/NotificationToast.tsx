import { useEffect } from "react";
import { toast } from "sonner";
import { Coins } from "lucide-react";

export const NotificationToast = () => {
  useEffect(() => {
    // Mock notification after 5 seconds
    const timer = setTimeout(() => {
      toast("💰 Rental Income Received", {
        description: "You received 500 ₸ from your property investment",
        icon: <Coins className="w-4 h-4 text-accent" />,
        duration: 5000,
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};