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
          name: "Fairy Ultra Plus Dishwashing Liquid",
          description: "Advanced formula that removes tough grease 50% faster than ordinary liquids. Gentle on hands with aloe vera extract.",
          usage: "Apply directly to sponge or dilute in water. Works effectively in both hot and cold water.",
          image: "https://m.media-amazon.com/images/I/71yV5vG1R2L._SL1500_.jpg",
          features: [
            "3x more effective on grease",
            "pH balanced formula",
            "Biodegradable ingredients",
            "Suitable for all dish types"
          ]
        },
        {
          name: "Dettol Antibacterial Surface Cleaner",
          description: "Kills 99.9% of bacteria and viruses including E.coli and Salmonella. Leaves surfaces hygienically clean.",
          usage: "Spray directly onto surfaces and wipe clean with a cloth. No need to rinse.",
          image: "https://m.media-amazon.com/images/I/61YyQy5r0FL._SL1500_.jpg",
          features: [
            "Lemon fresh fragrance",
            "Works on multiple surfaces",
            "Proven antibacterial action",
            "500ml spray bottle"
          ]
        },
        {
          name: "Vileda SuperMocio Microfiber Floor Mop",
          description: "Advanced microfiber technology that absorbs 7x more liquid than conventional mops with 50% better dirt removal.",
          usage: "Attach to telescopic handle, dampen with water or cleaning solution, then mop floors. Machine washable up to 60°C.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "360° rotating head",
            "Washable up to 300 times",
            "Ergonomic handle",
            "Suitable for all floor types"
          ]
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
          name: "Carhartt Force T-Shirt",
          description: "Moisture-wicking performance t-shirt with odor control technology. Made from 100% cotton for durability and comfort.",
          usage: "Ideal for hot work environments. Machine wash cold, tumble dry low.",
          image: "https://m.media-amazon.com/images/I/71T5hYjJmZL._AC_UX569_.jpg",
          features: [
            "UPF 30+ sun protection",
            "Rib-knit collar",
            "Tagless neck label",
            "Reinforced seams"
          ]
        },
        {
          name: "Dickies Flex Regular Fit Duck Carpenter Jeans",
          description: "Durable work pants with flex technology for freedom of movement. Made with cotton duck canvas and reinforced stitching.",
          usage: "Features hammer loop, tool pockets and reinforced knees for professional use.",
          image: "https://m.media-amazon.com/images/I/81v0r8J1kIL._AC_UX569_.jpg",
          features: [
            "Flexible stretch fabric",
            "Double-front design",
            "8-pocket design",
            "28-44 waist sizes"
          ]
        },
        {
          name: "Timberland PRO Men's 6" Pit Boss Steel Toe Boot",
          description: "Industrial-grade safety boots with anti-fatigue technology and electrical hazard protection.",
          usage: "Designed for construction and industrial work environments. Waterproof and slip-resistant.",
          image: "https://m.media-amazon.com/images/I/71+1+3Y5wmL._AC_UX625_.jpg",
          features: [
            "ASTM F2413-11 safety rated",
            "Steel toe protection",
            "Anti-microbial lining",
            "Rubber lug outsole"
          ]
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
          name: "Dell OptiPlex 7080 Desktop",
          description: "Compact business desktop with 10th Gen Intel Core processors and professional graphics options.",
          usage: "Ideal for office environments, call centers, and professional workspaces.",
          image: "https://m.media-amazon.com/images/I/71yV5vG1R2L._SL1500_.jpg",
          features: [
            "Intel Core i5-10500 processor",
            "8GB DDR4 RAM (expandable to 64GB)",
            "256GB SSD + 1TB HDD",
            "Windows 10 Pro"
          ]
        },
        {
          name: "HP EliteDisplay E243 24-inch Monitor",
          description: "Full HD business monitor with ergonomic stand and eye care technology.",
          usage: "Connect via DisplayPort, HDMI or VGA. Features adjustable tilt, swivel, pivot and height.",
          image: "https://m.media-amazon.com/images/I/81wXcfu3VTL._AC_SL1500_.jpg",
          features: [
            "1920x1080 resolution",
            "Anti-glare IPS panel",
            "Low blue light mode",
            "VESA mount compatible"
          ]
        },
        {
          name: "Logitech MK540 Advanced Wireless Keyboard & Mouse Combo",
          description: "Secure and comfortable wireless input devices with 2.4GHz wireless connection.",
          usage: "Plug-and-play USB receiver with 128-bit AES encryption for security.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "3-year battery life",
            "Quiet Touch keys",
            "Precision scroll wheel",
            "8m wireless range"
          ]
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
          name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
          description: "Multi-functional cooker that pressure cooks, slow cooks, rice cooker, yogurt maker, steamer, sauté pan and warmer.",
          usage: "14 built-in smart programs for hands-free cooking. 10 safety mechanisms included.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "6-quart capacity",
            "1000 watts of power",
            "Stainless steel cooking pot",
            "Delayed cooking timer"
          ]
        },
        {
          name: "Shark Navigator Lift-Away Professional Vacuum",
          description: "Powerful upright vacuum with HEPA filtration and lift-away technology for portable cleaning.",
          usage: "Converts to handheld vacuum for cleaning stairs, furniture and tight spaces.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Anti-allergen complete seal",
            "Swivel steering",
            "25-foot power cord",
            "5-year limited warranty"
          ]
        },
        {
          name: "Honeywell HCE200W UberHeat Ceramic Heater",
          description: "Compact personal heater with adjustable thermostat and overheat protection.",
          usage: "Ideal for small rooms up to 150 square feet. Two heat settings (750W/1500W).",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Cool-touch housing",
            "Tip-over switch",
            "Energy efficient",
            "Manual controls"
          ]
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
          name: "IKEA Markus Office Chair",
          description: "Ergonomic office chair with adjustable height, tilt tension and lumbar support.",
          usage: "Designed for long work sessions with breathable mesh backrest.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "10-year limited warranty",
            "Adjustable armrests",
            "Nylon base with casters",
            "Maximum load: 242 lbs"
          ]
        },
        {
          name: "Zinus Modern Studio 6 Inch Platform Bed Frame",
          description: "Low-profile platform bed with sturdy steel frame and noise-free design.",
          usage: "No box spring needed. Fits standard queen mattresses.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Tool-free assembly",
            "700 lb weight capacity",
            "12-inch underbed clearance",
            "5-year warranty"
          ]
        },
        {
          name: "Bush Furniture Cabot L-Shaped Desk",
          description: "Corner workstation with file drawer, CPU stand and cord management.",
          usage: "Laminate surface resists scratches and stains. Left or right orientation available.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "58.5W x 59D inches",
            "Adjustable leg levelers",
            "10-year warranty",
            "Cherry finish"
          ]
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
          name: "Moen 7594ESRS Arbor Motionsense Wave Sensor Faucet",
          description: "Hands-free kitchen faucet with motion sensor and spot resist stainless finish.",
          usage: "Wave to activate flow. Ideal for when hands are dirty or full.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Touchless and manual modes",
            "Magnetic docking spray head",
            "6.5 GPM flow rate",
            "Lifetime limited warranty"
          ]
        },
        {
          name: "KOHLER K-3609-0 Memoirs Stately Comfort Height Toilet",
          description: "Water-efficient elongated bowl toilet with class five flushing technology.",
          usage: "ADA compliant comfort height. Quiet-close seat included.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "1.28 GPF rating",
            "12-inch rough-in",
            "AquaPiston canister",
            "10-year warranty"
          ]
        },
        {
          name: "RIDGID 59787 Model K-400 Drain Cleaning Machine",
          description: "Professional-grade drum machine for clearing clogged drains up to 4 inches.",
          usage: "Includes 50 feet of 5/16-inch cable and storage case.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "3/8 HP motor",
            "Automatic cable feed",
            "Heavy-duty steel frame",
            "7-year warranty"
          ]
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
          name: "Swingline Optima 40 Sheet Stapler",
          description: "Heavy-duty stapler with full-strip capability and anti-jam mechanism.",
          usage: "Staples up to 40 sheets. Front-loading staple cartridge.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "Metal construction",
            "Lifetime warranty",
            "Rubber base",
            "Uses standard #10 staples"
          ]
        },
        {
          name: "Post-it Super Sticky Notes 3x3",
          description: "Extra-stickiness notes that adhere better to vertical and irregular surfaces.",
          usage: "Great for brainstorming, reminders and marking documents.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "24 pads per pack",
            "76% recycled paper",
            "Multiple colors",
            "2x the sticking power"
          ]
        },
        {
          name: "HP OfficeJet Pro 9015e All-in-One Printer",
          description: "Smart business printer with mobile printing, automatic duplex and high-yield ink options.",
          usage: "Print, scan, copy and fax. Works with Alexa.",
          image: "https://m.media-amazon.com/images/I/71Yd4J9wZFL._SL1500_.jpg",
          features: [
            "22 ppm printing speed",
            "35-page ADF",
            "250-sheet paper tray",
            "6-month ink subscription included"
          ]
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
        <meta charset="UTF-8" />
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
            
            <div className="productsContainer">
              {service.products.map((product, index) => (
                <div key={index} className={`productCard ${index % 2 === 0 ? 'leftAlign' : 'rightAlign'}`}>
                  <div className="productImageContainer">
                    <img src={product.image} alt={product.name} className="productImage" />
                  </div>
                  
                  <div className="productInfo">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>
                    
                    <div className="usageSection">
                      <h4 className="sectionTitle">Usage</h4>
                      <p>{product.usage}</p>
                    </div>
                    
                    <div className="featuresSection">
                      <h4 className="sectionTitle">Key Features</h4>
                      <ul className="featuresList">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
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