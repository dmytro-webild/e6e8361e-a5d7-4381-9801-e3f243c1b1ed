"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmall"
      background="aurora"
      cardStyle="gradient-radial"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          brandName="Artisan Table"
          bottomLeftText="Fine Dining Experience"
          bottomRightText="reservations@artisantable.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ARTISAN TABLE"
          description="Discover the art of fine dining. Experience culinary excellence and sophisticated hospitality in an elegant setting."
          buttons={[
            { text: "Reserve Your Table", href: "#contact" },
            { text: "Explore Our Menu", href: "#menu" }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/wicker-gray-table-with-glass-gray-chairs_140725-3025.jpg", imageAlt: "Elegant fine dining restaurant interior" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-restaurant-kitchen-with-wood-fired-oven_23-2151949233.jpg", imageAlt: "Professional chef in gourmet kitchen" },
            { imageSrc: "http://img.b2bpic.net/free-vector/lovely-restaurant-composition_23-2147913198.jpg", imageAlt: "Restaurant storefront entrance" }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Culinary Excellence Redefined"
          description="At Artisan Table, we blend traditional techniques with innovative flavors. Our award-winning chefs source the finest ingredients to create memorable dining experiences that celebrate the art of gastronomy."
          tag="Our Story"
          imageSrc="http://img.b2bpic.net/free-photo/modern-restaurant-kitchen-with-wood-fired-oven_23-2151949233.jpg"
          imageAlt="Chef preparing gourmet cuisine"
          buttons={[{ text: "Learn Our Craft", href: "#" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Selections"
          description="Curated dishes from our seasonal menu, each crafted with precision and passion"
          tag="Menu Highlights"
          products={[
            {
              id: "1",              name: "Pan-Seared Salmon with Citrus Emulsion",              price: "$38",              imageSrc: "http://img.b2bpic.net/free-photo/baked-meal-quince-with-bread_140725-2697.jpg",              imageAlt: "Pan-seared salmon with citrus emulsion"
            },
            {
              id: "2",              name: "Herb-Crusted Lamb with Root Vegetables",              price: "$42",              imageSrc: "http://img.b2bpic.net/free-photo/chicken-nuggets-filled-with-cream-ham-served-with-pineapple_140725-1517.jpg",              imageAlt: "Herb-crusted lamb with root vegetables"
            },
            {
              id: "3",              name: "Dark Chocolate Soufflé with Raspberry Coulis",              price: "$16",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-soft-cake-decorated-with-orange-chocolate-dark-table_140725-87067.jpg",              imageAlt: "Dark chocolate soufflé with raspberry coulis"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Artisan Table exceeded every expectation. The attention to detail, exquisite flavors, and impeccable service created an unforgettable evening. This is truly where culinary art comes to life."
          rating={5}
          author="Michael Sterling, Food Critic"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/carefree-woman-with-alluring-appearance-wonderful-shining-hair-wearing-black-leather-jacket_176532-8115.jpg", alt: "Professional portrait" },
            { src: "http://img.b2bpic.net/free-photo/close-up-businessman-with-hands-crossed-smiling_158595-3406.jpg", alt: "Professional portrait" },
            { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg", alt: "Professional portrait" },
            { src: "http://img.b2bpic.net/free-photo/portrait-successful-young-businessman-with-his-arms-crossed-looking-camera_23-2148176207.jpg", alt: "Professional portrait" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Culinary Experience"
          description="Book your table at Artisan Table. Our team looks forward to welcoming you for an exceptional evening of fine dining."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
            { name: "time", type: "time", placeholder: "Preferred Time", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Special requests or dietary preferences...", rows: 4, required: false }}
          imageSrc="http://img.b2bpic.net/free-vector/lovely-restaurant-composition_23-2147913198.jpg"
          imageAlt="Restaurant entrance"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Reserve Table"
          useInvertedBackground={false}
          onSubmit={(data) => console.log("Reservation form submitted:", data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/young-couple-drinking-wine-holding-hands-table_23-2148014465.jpg"
          imageAlt="Restaurant ambiance"
          columns={[
            {
              title: "Restaurant",              items: [
                { label: "Home", href: "#hero" },
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone", href: "tel:+1-555-123-4567" },
                { label: "Email", href: "mailto:info@artisantable.com" },
                { label: "Address", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          logoText="ARTISAN TABLE"
          copyrightText="© 2025 Artisan Table. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
