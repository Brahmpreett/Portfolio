import { useState } from 'react';
import { Heart, Coffee, Star, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';
import QRCode from 'qrcode';
import { useEffect } from 'react';

const donationAmounts = [
  { amount: 10, icon: Coffee, label: 'Buy me a coffee' },
  { amount: 100, icon: Star, label: 'Show appreciation' },
  { amount: 1000, icon: Gift, label: 'Super supporter' },
];

const Support = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const { toast } = useToast();

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
    setShowSuccess(false);
  };

  const handleCustomAmountSelect = () => {
    setIsCustom(true);
    setSelectedAmount(null);
    setShowSuccess(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
    }
  };

  const generateUPILink = (amount: number) => {
    return `upi://pay?pa=7837736168@pz&pn=Support%20Developer&cu=INR&am=${amount}`;
  };

  const generateQRCode = async (upiLink: string) => {
    try {
      const qrUrl = await QRCode.toDataURL(upiLink, {
        width: 200,
        margin: 2,
        color: {
          dark: '#ffffff',
          light: '#00000000'
        }
      });
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleProceed = async () => {
    const amount = isCustom ? parseInt(customAmount) : selectedAmount;
    
    if (!amount || amount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter an amount of at least ₹1.",
        variant: "destructive"
      });
      return;
    }

    const upiLink = generateUPILink(amount);
    
    // Generate QR code
    await generateQRCode(upiLink);
    
    // Try to open UPI app
    window.location.href = upiLink;
    
    // Show success message after a short delay
    setTimeout(() => {
      setShowSuccess(true);
      toast({
        title: "Payment Link Generated! 🚀",
        description: `UPI payment link created for ₹${amount}. Thank you for your support!`,
      });
    }, 1000);
  };

  const currentAmount = isCustom ? parseInt(customAmount) || 0 : selectedAmount || 0;

  return (
    <div className="py-16">
      <SectionHeader
        title="Support the Developer ❤️"
        subtitle="Your contribution helps me build more projects. Thank you for supporting!"
      />

      <div className="max-w-2xl mx-auto">
        {!showSuccess ? (
          <>
            {/* Gratitude Section */}
            <CardComponent className="text-center mb-12" gradient>
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold mb-4">Thank You for Your Support!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your generosity enables me to dedicate more time to open source projects, 
                create educational content, and build tools that benefit the developer community. 
                Every contribution, no matter the size, is deeply appreciated.
              </p>
            </CardComponent>

            {/* Donation Options */}
            <CardComponent className="gradient-border">
              <h3 className="text-xl font-bold mb-6 text-center">Choose Your Support Level</h3>
              
              {/* Predefined Amounts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {donationAmounts.map(({ amount, icon: Icon, label }) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ease-out hover:scale-105 focus-ring ${
                      selectedAmount === amount
                        ? 'border-gradient-primary-start bg-surface-elevated shadow-glow'
                        : 'border-border hover:border-gradient-primary-start/50'
                    }`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-gradient-primary-start" />
                    <div className="text-2xl font-bold mb-1">₹{amount}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <button
                  onClick={handleCustomAmountSelect}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ease-out hover:scale-[1.02] focus-ring ${
                    isCustom
                      ? 'border-gradient-primary-start bg-surface-elevated shadow-glow'
                      : 'border-border hover:border-gradient-primary-start/50'
                  }`}
                >
                  <div className="text-lg font-semibold mb-2">Custom Amount</div>
                  <div className="text-sm text-muted-foreground">Enter your preferred amount</div>
                </button>

                {isCustom && (
                  <div className="mt-4 animate-fade-in">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        ₹
                      </span>
                      <Input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="pl-8 text-center text-lg focus-ring transition-all duration-300"
                        autoFocus
                      />
                    </div>
                    {customAmount && parseInt(customAmount) < 1 && (
                      <p className="text-sm text-destructive mt-2 text-center animate-fade-in">
                        Minimum amount is ₹1
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Proceed Button */}
              <div className="text-center">
                <Button
                  onClick={handleProceed}
                  disabled={currentAmount < 1}
                  className="gradient-primary text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 ease-out focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentAmount > 0 
                    ? `Proceed with ₹${currentAmount}`
                    : 'Select an amount to proceed'
                  }
                </Button>
              </div>
            </CardComponent>
          </>
        ) : (
          /* Success Message with QR Code */
          <CardComponent className="text-center gradient-border animate-scale-in">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h3 className="text-2xl font-bold mb-4 gradient-text-primary">Payment Link Generated!</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              If your UPI app did not open, please scan the QR below.
            </p>
            
            {qrCodeUrl && (
              <div className="flex justify-center mb-6">
                <div className="relative p-4 bg-white rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-2xl opacity-100 "></div>
                  <img 
                    src={qrCodeUrl} 
                    alt="UPI Payment QR Code"
                    className="relative z-10 w-48 h-48"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Amount: ₹{currentAmount}
              </p>
              <p className="text-xs text-muted-foreground">
                UPI ID: 7837736168@pz
              </p>
              <Button
                onClick={() => {
                  setShowSuccess(false);
                  setSelectedAmount(null);
                  setIsCustom(false);
                  setCustomAmount('');
                  setQrCodeUrl('');
                }}
                variant="outline"
                className="mt-4 transition-all duration-300 hover:scale-105"
              >
                Make Another Donation
              </Button>
            </div>
          </CardComponent>
        )}

        {/* Additional Ways to Support */}
        <CardComponent className="mt-8">
          <h3 className="text-lg font-bold mb-4 text-center">Other Ways to Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-surface rounded-lg transition-all duration-300 hover:scale-105">
              <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
              <h4 className="font-semibold mb-1">Star My Projects</h4>
              <p className="text-sm text-muted-foreground">
                Give my GitHub repositories a star
              </p>
            </div>
            <div className="p-4 bg-surface rounded-lg transition-all duration-300 hover:scale-105">
              <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <h4 className="font-semibold mb-1">Share & Recommend</h4>
              <p className="text-sm text-muted-foreground">
                Tell others about my work
              </p>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default Support;