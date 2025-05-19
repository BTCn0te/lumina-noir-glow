
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const announcements = [
  "Free U.S. shipping on orders $35+",
  "Join Lumina Rewards and earn points with every purchase",
  "New Arrivals: Shop our latest melanin-focused formulas",
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("announcementBarClosed", "true");
  };

  useEffect(() => {
    const isClosed = localStorage.getItem("announcementBarClosed") === "true";
    if (isClosed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-lumina-cacao text-white py-2 relative">
      <div className="container text-center text-sm">
        {announcements[currentIndex]}
      </div>
      <button 
        onClick={handleClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4 text-white" />
      </button>
    </div>
  );
}
