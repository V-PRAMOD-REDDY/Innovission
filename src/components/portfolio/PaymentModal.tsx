import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Smartphone, Shield, Crown, Check, Star } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayment: (paymentData: any) => void;
  portfolioData: any;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPayment, portfolioData }) => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    basic: {
      name: 'Basic Portfolio',
      price: 49,
      features: [
        'Professional portfolio website',
        'Mobile responsive design',
        'Source code download',
        'Basic template',
        'Standard deployment'
      ]
    },
    premium: {
      name: 'Premium Portfolio',
      price: 149,
      features: [
        'Everything in Basic',
        'Premium templates (3D, Animated)',
        'Custom domain (yourname.ontimeupdates.in)',
        'Portfolio analytics',
        'SEO optimization',
        'Social media preview cards',
        'Certificate of completion',
        'Priority support'
      ]
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      onPayment({
        plan: selectedPlan,
        amount: plans[selectedPlan].price,
        method: paymentMethod,
        portfolioData
      });
      setIsProcessing(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Deploy Your Portfolio
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            {/* Plan Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Choose Your Plan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all ${
                    selectedPlan === 'basic'
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPlan('basic')}
                >
                  {selectedPlan === 'basic' && (
                    <div className="absolute top-3 right-3 bg-primary-600 text-white rounded-full p-1">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {plans.basic.name}
                      </h4>
                      <p className="text-2xl font-bold text-blue-600">₹{plans.basic.price}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plans.basic.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all ${
                    selectedPlan === 'premium'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPlan('premium')}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </span>
                  </div>

                  {selectedPlan === 'premium' && (
                    <div className="absolute top-3 right-3 bg-purple-600 text-white rounded-full p-1">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4 mt-4">
                    <Crown className="h-6 w-6 text-purple-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {plans.premium.name}
                      </h4>
                      <p className="text-2xl font-bold text-purple-600">₹{plans.premium.price}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plans.premium.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Star className="h-4 w-4 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  UPI / PhonePe / GPay
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Credit / Debit Card
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Secure Payment
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-300">
                    Your payment is processed securely through Razorpay. We don't store your payment information.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4 dark:text-white">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Portfolio for: {portfolioData.name || 'Your Portfolio'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{plans[selectedPlan].name}</span>
                  <span className="font-medium dark:text-white">₹{plans[selectedPlan].price}</span>
                </div>
                {selectedPlan === 'premium' && portfolioData.customDomain && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Custom Domain</span>
                    <span className="font-medium dark:text-white">Included</span>
                  </div>
                )}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="dark:text-white">Total</span>
                    <span className="text-primary-600">₹{plans[selectedPlan].price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 btn btn-outline"
                disabled={isProcessing}
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="flex-1 btn btn-primary flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay ₹{plans[selectedPlan].price}
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PaymentModal;