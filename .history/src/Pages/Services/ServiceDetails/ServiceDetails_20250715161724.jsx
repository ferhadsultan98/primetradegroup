import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Droplet, Shirt, Monitor, Warehouse, Sofa, Wrench, Book } from "lucide-react";
import "./ServiceDetails.scss";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "cleaning",
      title: t("services.cleaning.title"),
      icon: Droplet,
      details: t("services.cleaning.details"),
      products: [
        {
          name: "Fairy Dishwashing Liquid",
          description: "Powerful grease-cutting formula that removes tough stains and leaves dishes sparkling clean. Contains skin-friendly ingredients.",
          usage: "Apply 2-3 drops to sponge or directly to dishes. Rinse thoroughly with water.",
          features: ["Grease cutting", "Gentle on skin", "Long-lasting suds", "Pleasant fragrance"],
          image: "/images/cleaning/fairy-dish-soap.jpg"
        },
        {
          name: "Ajax All-Purpose Cleaner",
          description: "Multi-surface cleaner that cuts through grease and grime on various surfaces. Ammonia-based formula for effective cleaning.",
          usage: "Spray on surface, let sit for 30 seconds, then wipe with clean cloth. No rinsing required for most surfaces.",
          features: ["Multi-surface", "Grease cutting", "No streaking", "Quick acting"],
          image: "/images/cleaning/ajax-cleaner.jpg"
        },
        {
          name: "Domestos Bleach",
          description: "Kills 99.9% of bacteria and viruses. Ideal for toilet bowls, sinks, and other hard surfaces requiring disinfection.",
          usage: "Pour around toilet bowl rim, leave for 15 minutes, brush and flush. Dilute 1:10 for surface cleaning.",
          features: ["Kills germs", "Whitens", "Removes stains", "Thick formula"],
          image: "/images/cleaning/domestos-bleach.jpg"
        },
        {
          name: "Persil Laundry Detergent",
          description: "Advanced stain removal formula suitable for all fabric types. Deep clean technology removes tough stains effectively.",
          usage: "Use 1 cap for normal loads, 2 caps for heavily soiled items. Works in all water temperatures.",
          features: ["Deep clean", "Stain removal", "Color protection", "Fresh scent"],
          image: "/images/cleaning/persil-detergent.jpg"
        },
        {
          name: "Windex Glass Cleaner",
          description: "Streak-free glass and window cleaner. Ammonia-D formula cuts through dirt and grime leaving surfaces crystal clear.",
          usage: "Spray directly on glass surface, wipe with lint-free cloth or paper towel in circular motions.",
          features: ["Streak-free", "Quick drying", "Ammonia-D formula", "Versatile use"],
          image: "/images/cleaning/windex-glass.jpg"
        },
        {
          name: "Lysol Disinfectant Spray",
          description: "Kills 99.9% of viruses and bacteria on hard surfaces. Eliminates odors and provides long-lasting freshness.",
          usage: "Spray 6-8 inches from surface until thoroughly wet. Allow to air dry. No wiping necessary.",
          features: ["Disinfects", "Eliminates odors", "Long-lasting", "Multi-surface"],
          image: "/images/cleaning/lysol-spray.jpg"
        }
      ]
    },
    {
      id: "workwear",
      title: t("services.workwear.title"),
      icon: Shirt,
      details: t("services.workwear.details"),
      products: [
        {
          name: "Dickies Work Pants",
          description: "Durable cotton-polyester blend work pants with reinforced knees and multiple pockets for tools and accessories.",
          usage: "Machine wash in cold water, tumble dry low. Iron on medium heat if needed.",
          features: ["Reinforced knees", "Multiple pockets", "Durable fabric", "Comfortable fit"],
          image: "/images/workwear/dickies-pants.jpg"
        },
        {
          name: "Caterpillar Steel Toe Boots",
          description: "Safety boots with steel toe protection, slip-resistant sole, and electrical hazard protection. Meets OSHA standards.",
          usage: "Ensure proper fit, inspect regularly for wear. Clean with damp cloth and leather conditioner.",
          features: ["Steel toe protection", "Slip-resistant", "Electrical hazard protection", "Durable leather"],
          image: "/images/workwear/cat-boots.jpg"
        },
        {
          name: "3M Hard Hat",
          description: "ANSI/ISEA Z89.1 compliant hard hat with 4-point suspension system for maximum comfort and protection.",
          usage: "Adjust suspension system for comfortable fit. Inspect for cracks before each use.",
          features: ["ANSI compliant", "4-point suspension", "Lightweight", "Adjustable"],
          image: "/images/workwear/3m-hardhat.jpg"
        },
        {
          name: "Hi-Vis Safety Vest",
          description: "Class 2 high-visibility safety vest with reflective strips. Meets ANSI/ISEA 107 standards for roadway safety.",
          usage: "Wear over regular clothing. Machine wash cold, air dry. Do not bleach or iron reflective strips.",
          features: ["Class 2 visibility", "Reflective strips", "Breathable mesh", "Adjustable sides"],
          image: "/images/workwear/hiviz-vest.jpg"
        },
        {
          name: "Mechanix Work Gloves",
          description: "Synthetic leather palm gloves with reinforced fingertips and secure wrist closure for protection and dexterity.",
          usage: "Select proper size for best fit. Hand wash in cold water, air dry away from heat.",
          features: ["Synthetic leather", "Reinforced fingertips", "Secure closure", "Flexible"],
          image: "/images/workwear/mechanix-gloves.jpg"
        }
      ]
    },
    {
      id: "it_equipment",
      title: t("services.it_equipment.title"),
      icon: Monitor,
      details: t("services.it_equipment.details"),
      products: [
        {
          name: "HP LaserJet Pro Printer",
          description: "Professional monochrome laser printer with fast printing speeds and high-quality output. Network connectivity included.",
          usage: "Connect to network, install drivers, load paper in tray. Replace toner when prompted.",
          features: ["Fast printing", "Network ready", "High quality", "Energy efficient"],
          image: "/images/it/hp-laserjet.jpg"
        },
        {
          name: "Canon PIXMA Inkjet Printer",
          description: "All-in-one inkjet printer with printing, scanning, and copying capabilities. Wireless connectivity and mobile printing support.",
          usage: "Setup wireless connection, install Canon mobile app. Use genuine Canon ink cartridges for best results.",
          features: ["All-in-one", "Wireless", "Mobile printing", "Color printing"],
          image: "/images/it/canon-pixma.jpg"
        },
        {
          name: "Xerox WorkCentre Multifunction",
          description: "Enterprise-grade multifunction printer with advanced scanning, copying, and faxing capabilities. High-capacity paper handling.",
          usage: "Professional installation recommended. Regular maintenance required. Use Xerox genuine supplies.",
          features: ["Enterprise grade", "High capacity", "Advanced features", "Reliable"],
          image: "/images/it/xerox-workcentre.jpg"
        },
        {
          name: "Dell OptiPlex Desktop",
          description: "Business desktop computer with Intel processor, ample RAM, and SSD storage. Compact design with multiple connectivity options.",
          usage: "Connect to power and monitor, install required software. Regular updates and maintenance recommended.",
          features: ["Business grade", "Compact design", "SSD storage", "Multiple ports"],
          image: "/images/it/dell-optiplex.jpg"
        },
        {
          name: "Cisco Network Switch",
          description: "Enterprise network switch with multiple Ethernet ports, VLAN support, and advanced security features.",
          usage: "Professional installation required. Configure VLANs and security settings according to network requirements.",
          features: ["Enterprise grade", "VLAN support", "Security features", "Reliable"],
          image: "/images/it/cisco-switch.jpg"
        },
        {
          name: "APC UPS Battery Backup",
          description: "Uninterruptible Power Supply with battery backup and surge protection. LCD display shows power status and battery life.",
          usage: "Connect equipment to UPS outlets. Test battery monthly. Replace battery every 3-5 years.",
          features: ["Battery backup", "Surge protection", "LCD display", "Reliable"],
          image: "/images/it/apc-ups.jpg"
        }
      ]
    },
    {
      id: "household",
      title: t("services.household.title"),
      icon: Warehouse,
      details: t("services.household.details"),
      products: [
        {
          name: "Whirlpool Refrigerator",
          description: "Energy-efficient refrigerator with adjustable shelves, humidity-controlled crisper drawers, and ice maker.",
          usage: "Allow 24 hours to settle before first use. Clean coils every 6 months. Replace water filter as needed.",
          features: ["Energy efficient", "Adjustable shelves", "Ice maker", "Humidity control"],
          image: "/images/household/whirlpool-fridge.jpg"
        },
        {
          name: "Samsung Washing Machine",
          description: "Front-loading washing machine with multiple wash cycles, steam cleaning, and energy-efficient operation.",
          usage: "Sort clothes by color and fabric. Use appropriate detergent amount. Clean lint filter regularly.",
          features: ["Multiple cycles", "Steam cleaning", "Energy efficient", "Large capacity"],
          image: "/images/household/samsung-washer.jpg"
        },
        {
          name: "Dyson Vacuum Cleaner",
          description: "Cordless vacuum with powerful suction, multiple attachments, and long battery life. Suitable for all floor types.",
          usage: "Charge fully before first use. Empty dustbin when full. Clean filters monthly.",
          features: ["Cordless", "Powerful suction", "Multiple attachments", "Long battery"],
          image: "/images/household/dyson-vacuum.jpg"
        },
        {
          name: "KitchenAid Stand Mixer",
          description: "Professional-grade stand mixer with powerful motor, multiple attachments, and large mixing bowl capacity.",
          usage: "Attach bowl and beater securely. Start at low speed, increase gradually. Clean after each use.",
          features: ["Powerful motor", "Multiple attachments", "Large bowl", "Durable"],
          image: "/images/household/kitchenaid-mixer.jpg"
        },
        {
          name: "Nest Thermostat",
          description: "Smart thermostat with learning capabilities, remote control via app, and energy-saving features.",
          usage: "Professional installation recommended. Set schedule via app. Monitor energy usage regularly.",
          features: ["Smart learning", "Remote control", "Energy saving", "Easy installation"],
          image: "/images/household/nest-thermostat.jpg"
        }
      ]
    },
    {
      id: "furniture",
      title: t("services.furniture.title"),
      icon: Sofa,
      details: t("services.furniture.details"),
      products: [
        {
          name: "Herman Miller Office Chair",
          description: "Ergonomic office chair with lumbar support, adjustable height, and breathable mesh back. Designed for long-term comfort.",
          usage: "Adjust height and lumbar support to fit your body. Clean with mild soap and water. Check mechanisms regularly.",
          features: ["Ergonomic design", "Lumbar support", "Adjustable height", "Breathable mesh"],
          image: "/images/furniture/herman-miller-chair.jpg"
        },
        {
          name: "IKEA Modular Sofa",
          description: "Modular sofa system with removable covers, multiple configuration options, and comfortable cushioning.",
          usage: "Assemble according to instructions. Vacuum regularly. Machine wash covers in cold water.",
          features: ["Modular design", "Removable covers", "Multiple configurations", "Comfortable"],
          image: "/images/furniture/ikea-sofa.jpg"
        },
        {
          name: "Steelcase Desk",
          description: "Modern office desk with cable management, adjustable height options, and durable steel construction.",
          usage: "Assemble with included hardware. Use cable management features. Clean with mild detergent.",
          features: ["Cable management", "Adjustable height", "Durable steel", "Modern design"],
          image: "/images/furniture/steelcase-desk.jpg"
        },
        {
          name: "West Elm Dining Table",
          description: "Solid wood dining table with modern design, expandable options, and durable finish.",
          usage: "Use coasters and placemats. Clean with wood cleaner. Avoid direct sunlight and heat.",
          features: ["Solid wood", "Modern design", "Expandable", "Durable finish"],
          image: "/images/furniture/westelm-table.jpg"
        },
        {
          name: "CB2 Storage Cabinet",
          description: "Modern storage cabinet with adjustable shelves, soft-close doors, and contemporary design.",
          usage: "Mount to wall if top-heavy. Adjust shelves as needed. Clean with microfiber cloth.",
          features: ["Adjustable shelves", "Soft-close doors", "Modern design", "Versatile storage"],
          image: "/images/furniture/cb2-cabinet.jpg"
        }
      ]
    },
    {
      id: "plumbing",
      title: t("services.plumbing.title"),
      icon: Wrench,
      details: t("services.plumbing.details"),
      products: [
        {
          name: "Kohler Toilet",
          description: "Water-efficient toilet with dual-flush technology, comfortable height, and powerful flushing system.",
          usage: "Professional installation recommended. Use appropriate toilet paper. Clean regularly with mild cleaners.",
          features: ["Dual-flush", "Water efficient", "Comfortable height", "Powerful flush"],
          image: "/images/plumbing/kohler-toilet.jpg"
        },
        {
          name: "Moen Kitchen Faucet",
          description: "Single-handle kitchen faucet with pull-down sprayer, spot-resistant finish, and easy installation.",
          usage: "Install with included hardware. Clean with mild soap. Replace cartridge if dripping occurs.",
          features: ["Pull-down sprayer", "Spot-resistant", "Easy installation", "Durable"],
          image: "/images/plumbing/moen-faucet.jpg"
        },
        {
          name: "Rheem Water Heater",
          description: "Energy-efficient water heater with digital display, multiple safety features, and long warranty.",
          usage: "Professional installation required. Set temperature to 120°F. Drain annually for maintenance.",
          features: ["Energy efficient", "Digital display", "Safety features", "Long warranty"],
          image: "/images/plumbing/rheem-heater.jpg"
        },
        {
          name: "American Standard Sink",
          description: "Stainless steel kitchen sink with double bowl, sound dampening, and scratch-resistant surface.",
          usage: "Clean with mild abrasive cleaner. Avoid harsh chemicals. Dry after use to prevent water spots.",
          features: ["Double bowl", "Sound dampening", "Scratch-resistant", "Stainless steel"],
          image: "/images/plumbing/american-standard-sink.jpg"
        },
        {
          name: "Delta Shower System",
          description: "Complete shower system with rainfall showerhead, hand shower, and thermostatic valve for temperature control.",
          usage: "Professional installation recommended. Clean showerheads monthly. Check for leaks regularly.",
          features: ["Rainfall head", "Hand shower", "Thermostatic valve", "Complete system"],
          image: "/images/plumbing/delta-shower.jpg"
        }
      ]
    },
    {
      id: "office_supplies",
      title: t("services.office_supplies.title"),
      icon: Book,
      details: t("services.office_supplies.details"),
      products: [
        {
          name: "Staples Copy Paper",
          description: "High-quality multipurpose copy paper, 20 lb weight, suitable for all printers and copiers. Acid-free for archival quality.",
          usage: "Store in dry place. Load into printer tray print-side down. Avoid bending or folding.",
          features: ["20 lb weight", "Acid-free", "Multipurpose", "Bright white"],
          image: "/images/office/staples-paper.jpg"
        },
        {
          name: "HP Ink Cartridges",
          description: "Original HP ink cartridges with reliable performance and consistent quality. Available in black and color options.",
          usage: "Remove protective tape before installation. Store in cool, dry place. Replace when prompted.",
          features: ["Original HP", "Reliable performance", "Consistent quality", "Multiple colors"],
          image: "/images/office/hp-ink.jpg"
        },
        {
          name: "Xerox Toner Cartridge",
          description: "High-yield toner cartridge for Xerox laser printers. Produces crisp, clear text and images.",
          usage: "Remove shipping materials before installation. Shake gently before use. Recycle empty cartridges.",
          features: ["High yield", "Crisp text", "Clear images", "Recyclable"],
          image: "/images/office/xerox-toner.jpg"
        },
        {
          name: "Bic Ballpoint Pens",
          description: "Classic ballpoint pens with smooth writing, reliable ink flow, and comfortable grip. Available in multiple colors.",
          usage: "Store with cap on. Keep at room temperature. Replace when ink runs out.",
          features: ["Smooth writing", "Reliable ink", "Comfortable grip", "Multiple colors"],
          image: "/images/office/bic-pens.jpg"
        },
        {
          name: "Post-it Sticky Notes",
          description: "Original Post-it notes with reliable adhesive and bright colors. Perfect for reminders and organizing.",
          usage: "Press firmly when applying. Remove gently to avoid tearing. Store in cool, dry place.",
          features: ["Reliable adhesive", "Bright colors", "Removable", "Versatile"],
          image: "/images/office/postit-notes.jpg"
        },
        {
          name: "Sharpie Markers",
          description: "Permanent markers with bold colors and fade-resistant ink. Works on most surfaces including plastic and metal.",
          usage: "Keep cap on when not in use. Store horizontally. Replace cap tightly to prevent drying.",
          features: ["Bold colors", "Fade-resistant", "Works on most surfaces", "Permanent"],
          image: "/images/office/sharpie-markers.jpg"
        },
        {
          name: "Avery Labels",
          description: "Adhesive labels for organizing and identification. Available in various sizes and colors with easy-peel backing.",
          usage: "Clean surface before applying. Press firmly for best adhesion. Remove backing carefully.",
          features: ["Various sizes", "Easy-peel backing", "Strong adhesive", "Multiple colors"],
          image: "/images/office/avery-labels.jpg"
        }
      ]
    }
  ];

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div>{t("services.not_found")}</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="serviceDetailsContainer">
      <Helmet>
        <title>{`${service.title} - PRIME TRADE GROUP MMC`}</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <div className="containerWrapper">
        <SectionHeader
          title={service.title}
          subtitle={t("services.details.subtitle")}
        />
        
        <section className="serviceDetailsSection">
          <div className="serviceDetailsContent">
            <div className="serviceIconWrapper">
              <IconComponent className="serviceIcon" />
            </div>
            <h2 className="serviceTitle">{service.title}</h2>
            <p className="serviceDetailsText">{service.details}</p>
            
            <div className="productsGrid">
              {service.products.map((product, index) => (
                <div key={index} className="productCard">
                  <div className="productImageWrapper">
                    <img src={product.image} alt={product.name} className="productImage" />
                  </div>
                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>
                    
                    <div className="productDetails">
                      <div className="detailSection">
                        <h4 className="detailTitle">Usage Instructions</h4>
                        <p className="detailText">{product.usage}</p>
                      </div>
                      
                      <div className="detailSection">
                        <h4 className="detailTitle">Key Features</h4>
                        <ul className="featuresList">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="featureItem">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="backButton"
              onClick={() => navigate("/services")}
            >
              {t("services.back")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;