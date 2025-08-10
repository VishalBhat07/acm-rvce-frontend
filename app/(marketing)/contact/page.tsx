import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import MapEmbed from '@/components/contact/MapEmbed';
// import FAQSection from '@/components/contact/FAQSection';
import NewsletterSignup from '@/components/contact/NewsletterSignup';
import { contactConfig } from '@/lib/config/contact';
// import { faqConfig } from '@/lib/config/faq';

export const metadata: Metadata = {
  title: contactConfig.title,
  description: contactConfig.description,
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero section */}
      <ContactHero 
        title={contactConfig.hero.title}
        subtitle={contactConfig.hero.subtitle}
        image="/gallery/img1.jpg"
        className="relative z-10"
      />
      
      {/* Contact form and info section */}
      <section className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info & Map Section */}
          <div className="order-2 md:order-1 flex flex-col">
            <ContactInfo 
              title={contactConfig.contactInfo.title}
              items={contactConfig.contactInfo.items}
              socialLinks={contactConfig.socialLinks}
              className="mb-6 md:mb-8"
            />
            
            {contactConfig.mapEmbed && (
              <MapEmbed 
                embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.599340738658!2d77.49692307583591!3d12.92398338746083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d7d493d%3A0x6e8abd2188934b12!2sR.V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1712233235427!5m2!1sen!2sin"
                className="mt-4 flex-grow"
              />
            )}
          </div>
          
          {/* Form Section */}
          <div className="order-1 md:order-2">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border p-6 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                {contactConfig.form.title}
              </h2>
              <div className="h-1 w-20 bg-primary/80 mb-4 rounded-full"></div>
              <p className="text-muted-foreground mb-6">
                {contactConfig.form.description}
              </p>
              <ContactForm 
                fields={contactConfig.form.fields}
                submitButtonText={contactConfig.form.submitButton.text}
                successMessage={contactConfig.form.successMessage}
                errorMessage={contactConfig.form.errorMessage}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      {/* <section className="relative z-10 container mx-auto px-4 py-10 md:py-16 mb-10">
        <NewsletterSignup 
          title="Stay Updated with ACM RVCE"
          description="Subscribe to our newsletter for updates on workshops, events, and opportunities."
          buttonText="Subscribe"
          placeholderText="example@rvce.edu.in"
          successMessage="You've successfully subscribed to our newsletter. You'll receive updates about our upcoming events and activities."
        />
      </section> */}
    </main>
  );
}
