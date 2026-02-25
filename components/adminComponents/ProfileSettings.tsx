"use client";
import ShowImage from "./ShowImage";
import Link from "next/link";
import {
  Camera,
  Upload,
  Image as ImageIcon,
  Star,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";

export interface ImageData {
  url: string;
  public_id?: string;
  width?: number;
  height?: number;
}

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState<ImageData | null>(null);
  const uploadWidgetRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(JSON.parse(savedImage));
    }
  }, []);

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info !== "string") {
      // Store the image data
      const imageData = {
        url: result.info.secure_url,
        public_id: result.info.public_id,
        width: result.info.width,
        height: result.info.height,
      };

      // Save to localStorage
      localStorage.setItem("profileImage", JSON.stringify(imageData));
      setProfileImage(imageData);

      // Or for multiple images:
      const existingImages = JSON.parse(
        localStorage.getItem("galleryImages") || "[]",
      );
      existingImages.push(imageData);
      localStorage.setItem("galleryImages", JSON.stringify(existingImages));
    }
  };

  const handleCameraClick = () => {
    if (uploadWidgetRef.current) {
      uploadWidgetRef.current();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-black rounded-lg flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-600 to-black  bg-clip-text text-transparent">
                CloudProfile
              </span>
            </div>
            <Link
              href="/upload"
              className="group flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-black  text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Upload className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Upload Photo</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image Container */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from- purple-400 to-blue-400 p-1">
                <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                  {profileImage && <ShowImage url={profileImage.url} />}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full shadow-lg">
                <Camera
                  onClick={handleCameraClick}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Alex Thompson
              </h1>
              <p className="text-gray-600 mb-4">
                Full Stack Developer & Cloudinary Expert
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  React Developer
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Next.js Expert
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  Cloudinary Pro
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-6 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm">1.2k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">4.9</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">324</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CldUploadWidget uploadPreset="bqrqs9cm" onSuccess={handleUpload}>
        {({ open }: { open: () => void }) => {
          uploadWidgetRef.current = open;
          return null;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ProfileSettings;
