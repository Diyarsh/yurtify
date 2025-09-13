import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, ArrowRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Confetti from 'react-confetti';

interface WalletOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletOnboarding = ({ isOpen, onClose }: WalletOnboardingProps) => {
  const [step, setStep] = useState<'welcome' | 'connecting' | 'tutorial' | 'success'>('welcome');
  const [showConfetti, setShowConfetti] = useState(false);
  const { t } = useLanguage();

  const handleConnect = () => {
    setStep('connecting');
    setTimeout(() => {
      setStep('tutorial');
    }, 2000);
  };

  const handleTutorialComplete = () => {
    setStep('success');
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      onClose();
      setStep('welcome');
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        {showConfetti && (
          <Confetti
            width={400}
            height={400}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        
        {step === 'welcome' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold gradient-accent bg-clip-text text-transparent">
                {t('wallet.welcome')}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Wallet className="w-10 h-10 text-white" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Connect your Phantom wallet to start your real estate investment journey
                </p>
              </div>
              
              <div className="grid gap-4">
                <Card className="p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="text-sm">Fast & Secure Transactions</span>
                  </div>
                </Card>
                <Card className="p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm">Your Keys, Your Crypto</span>
                  </div>
                </Card>
                <Card className="p-4 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm">Join 2,847+ Investors</span>
                  </div>
                </Card>
              </div>
              
              <Button onClick={handleConnect} className="w-full gradient-primary text-white hover:opacity-90">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Phantom Wallet
              </Button>
            </div>
          </>
        )}

        {step === 'connecting' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-spin">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('wallet.connecting')}</h3>
            <p className="text-muted-foreground">Please approve the connection in your Phantom wallet</p>
          </div>
        )}

        {step === 'tutorial' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-center">{t('wallet.tutorial.title')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <p className="text-sm">{t('wallet.tutorial.step1')}</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <p className="text-sm">{t('wallet.tutorial.step2')}</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <p className="text-sm">{t('wallet.tutorial.step3')}</p>
                </div>
              </div>
              
              <Button onClick={handleTutorialComplete} className="w-full gradient-primary text-white">
                Start Building Your Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}

        {step === 'success' && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-600">{t('wallet.connected')}</h3>
            <p className="text-muted-foreground">You're now ready to invest in tokenized real estate</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};