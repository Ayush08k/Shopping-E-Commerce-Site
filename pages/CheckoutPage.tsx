
import React, { useState } from 'react';
import { SHIPPING_METHODS, CART_ITEMS } from '../constants';
import { ShippingMethod, CartItem } from '../types';
import ProgressBar from '../components/ProgressBar';
import OrderSummary from '../components/OrderSummary';
import ShippingStep from '../components/ShippingStep';
import PaymentStep from '../components/PaymentStep';
import ReviewStep from '../components/ReviewStep';

type CheckoutStep = 'shipping' | 'payment' | 'review';

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>(SHIPPING_METHODS[0]);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);

  const steps: CheckoutStep[] = ['shipping', 'payment', 'review'];
  const currentStepIndex = steps.indexOf(currentStep);

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setAnimationClass('animate-slide-in-right');
      setCurrentStep(steps[currentStepIndex + 1]);
    }
  };

  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setAnimationClass('animate-slide-in-left');
      setCurrentStep(steps[currentStepIndex - 1]);
    }
  };
  
  const handleRemoveItem = (itemId: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };
  
  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems(currentItems => currentItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems(currentItems => {
        const itemToUpdate = currentItems.find(item => item.id === itemId);
        if (itemToUpdate && itemToUpdate.quantity > 1) {
            return currentItems.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            );
        } else {
            // Remove item if quantity is 1 or less
            return currentItems.filter(item => item.id !== itemId);
        }
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'shipping':
        return <ShippingStep onNext={goToNextStep} selectedMethod={shippingMethod} onSelectMethod={setShippingMethod} />;
      case 'payment':
        return <PaymentStep onNext={goToNextStep} onBack={goToPrevStep} />;
      case 'review':
        return <ReviewStep onBack={goToPrevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProgressBar steps={steps} currentStep={currentStep} />

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section className="lg:col-span-7">
            <div key={currentStep} className={animationClass}>
              {renderStepContent()}
            </div>
          </section>

          <OrderSummary 
            shippingMethod={shippingMethod} 
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
