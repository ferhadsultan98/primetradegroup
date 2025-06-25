import React from 'react';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  Truck, 
  Shield 
} from 'lucide-react';
import './Services.scss';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const Services = () => {
  const servicesData = [
    {
      title: 'Supply Chain Management',
      icon: Package,
      features: [
        'End-to-end supply chain optimization',
        'Real-time inventory tracking',
        'Demand forecasting and planning',
        'Supply chain risk management',
        'Performance analytics and reporting'
      ]
    },
    {
      title: 'Procurement Services',
      icon: ShoppingCart,
      features: [
        'Strategic sourcing solutions',
        'Supplier evaluation and selection',
        'Contract negotiation and management',
        'Cost reduction strategies',
        'Procurement process automation'
      ]
    },
    {
      title: 'Vendor Management',
      icon: Users,
      features: [
        'Vendor performance monitoring',
        'Relationship management',
        'Quality assurance programs',
        'Compliance and audit support',
        'Vendor development initiatives'
      ]
    },
    {
      title: 'Logistics Solutions',
      icon: Truck,
      features: [
        'Transportation management',
        'Warehousing and distribution',
        'Route optimization',
        'Last-mile delivery solutions',
        'International shipping coordination'
      ]
    },
    {
      title: 'Risk Assessment',
      icon: Shield,
      features: [
        'Supply chain risk identification',
        'Business continuity planning',
        'Financial risk evaluation',
        'Regulatory compliance assessment',
        'Crisis management strategies'
      ]
    }
  ];

  return (
    <div className="servicesContainer">
      <div className="containerWrapper">
    <SectionHeader title={}

        <div className="servicesSection">
          <div className="servicesGrid">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="serviceCard">
                  <div className="serviceIconWrapper">
                    <IconComponent className="serviceIcon" />
                  </div>
                  <h3 className="serviceTitle">{service.title}</h3>
                  <div className="serviceFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="featureItem">
                        <div className="featureBullet"></div>
                        <span className="featureText">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="serviceButton">Learn More</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ctaSection">
          <div className="ctaContent">
            <h2 className="ctaTitle">Ready to Transform Your Business?</h2>
            <p className="ctaText">
              Let us help you optimize your operations and achieve sustainable growth
            </p>
            <button className="ctaButton">Get Started Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;