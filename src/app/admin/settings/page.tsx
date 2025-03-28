"use client";

import { useState } from "react";
import { Save, Upload, Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

interface WebsiteSettings {
  logo: string;
  siteName: string;
  siteDescription: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export default function Settings() {
  const [settings, setSettings] = useState<WebsiteSettings>({
    logo: "/images/logo.png",
    siteName: "Community Center",
    siteDescription: "Building stronger communities together",
    socialMedia: {
      facebook: "https://facebook.com/communitycenter",
      twitter: "https://twitter.com/communitycenter",
      instagram: "https://instagram.com/communitycenter",
      linkedin: "https://linkedin.com/company/communitycenter"
    },
    contact: {
      address: "123 Community Street, City, Country",
      phone: "+1 234 567 890",
      email: "contact@communitycenter.com"
    }
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
        setSettings(prev => ({ ...prev, logo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialMediaChange = (platform: keyof WebsiteSettings['socialMedia'], value: string) => {
    setSettings(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }));
  };

  const handleContactChange = (field: keyof WebsiteSettings['contact'], value: string) => {
    setSettings(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log("Saving settings:", settings);
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Website Settings</h1>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid gap-6">
        {/* Website Fundamentals Section */}
        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Website Fundamentals</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Website Logo</label>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-32 border rounded-md overflow-hidden">
                  <Image
                    src={logoPreview || settings.logo}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80">
                    <Upload className="w-4 h-4" />
                    Upload New Logo
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings(prev => ({ ...prev, siteName: e.target.value }))}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Site Description</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
                className="w-full p-2 border rounded-md"
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* Social Media Links Section */}
        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <div className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-blue-600" />
                <input
                  type="url"
                  value={settings.socialMedia.facebook}
                  onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                  placeholder="https://facebook.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Twitter</label>
              <div className="flex items-center gap-2">
                <Twitter className="w-5 h-5 text-blue-400" />
                <input
                  type="url"
                  value={settings.socialMedia.twitter}
                  onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                  placeholder="https://twitter.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Instagram</label>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                <input
                  type="url"
                  value={settings.socialMedia.instagram}
                  onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-700" />
                <input
                  type="url"
                  value={settings.socialMedia.linkedin}
                  onChange={(e) => handleSocialMediaChange('linkedin', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                  placeholder="https://linkedin.com/..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <input
                  type="text"
                  value={settings.contact.address}
                  onChange={(e) => handleContactChange('address', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                <input
                  type="tel"
                  value={settings.contact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <input
                  type="email"
                  value={settings.contact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  className="flex-1 p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}