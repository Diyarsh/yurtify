import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Confetti from 'react-confetti';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    pricePerToken: number;
    availableTokens: number;
    image: string;
  };
}

export const TransactionModal = ({ isOpen, onClose, property }: TransactionModalProps) => {
  const [step, setStep] = useState<'select' | 'preview' | 'processing' | 'success'>('select');
  const [quantity, setQuantity] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const { t } = useLanguage();

  const totalPrice = quantity * property.pricePerToken;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(property.availableTokens, quantity + delta));
    setQuantity(newQuantity);
  };

  const handleConfirm = () => {
    setStep('preview');
  };

  const handlePurchase = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        onClose();
        setStep('select');
        setQuantity(1);
      }, 3000);
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setStep('select');
    setQuantity(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {showConfetti && (
          <Confetti
            width={400}
            height={400}
            recycle={false}
            numberOfPieces={200}
          />
        )}

        {step === 'select' && (
          <>
            <DialogHeader>
              <DialogTitle>Purchase Property Modules</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-6">
              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      ₸{property.pricePerToken.toLocaleString()} per module
                    </p>
                    <Badge variant="secondary" className="mt-1">
                      {property.availableTokens} modules available
                    </Badge>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Modules to purchase:</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= property.availableTokens}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Modules:</span>
                    <span className="font-semibold">{quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Price per module:</span>
                    <span className="font-semibold">₸{property.pricePerToken.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-primary/20 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-lg gradient-accent bg-clip-text text-transparent">
                        ₸{totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              <Button onClick={handleConfirm} className="w-full gradient-primary text-white">
                Continue to Preview
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}

        {step === 'preview' && (
          <>
            <DialogHeader>
              <DialogTitle>{t('transaction.preview')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {t('transaction.buying').replace('{count}', quantity.toString()).replace('{property}', property.title)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  You're about to become a proud owner of digital real estate modules
                </p>
              </div>

              <Card className="p-4 space-y-3">
                <div className="flex justify-between">
                  <span>Property:</span>
                  <span className="font-semibold">{property.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Modules:</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Price:</span>
                  <span className="font-semibold">₸{property.pricePerToken.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Fee:</span>
                  <span className="font-semibold">~₸150</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-xl gradient-accent bg-clip-text text-transparent">
                      ₸{(totalPrice + 150).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep('select')} className="flex-1">
                  Back
                </Button>
                <Button onClick={handlePurchase} className="flex-1 gradient-primary text-white">
                  {t('transaction.confirm')}
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 'processing' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-spin">
              <Loader2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('transaction.building')}</h3>
            <p className="text-muted-foreground">Processing your transaction on Solana blockchain...</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Validating transaction...</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Minting your modules...</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Updating your portfolio...</span>
              </div>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-600">{t('transaction.success')}</h3>
            <p className="text-muted-foreground mb-4">
              You now own {quantity} module{quantity > 1 ? 's' : ''} of {property.title}
            </p>
            <Badge variant="secondary" className="mb-4">
              🎉 Achievement Unlocked: Yurt Builder
            </Badge>
            <p className="text-sm text-muted-foreground">
              Start earning rental income immediately!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};