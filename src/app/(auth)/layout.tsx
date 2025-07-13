'use client'

import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import { auth } from "@/firebase";
import { useAuthStore } from "@/store/authStore";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useAuthStore();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
          });
          router.replace("/dashboard");
        } else {
          setUser(null);
        }

        setLoading(false);
      });
  
      return () => unsubscribe();
    }, [setUser, router]);
  
  
    
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="animate-spin" />
        </div>
      );
    }
  
    if (user) {
      return null;
    }
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="relative hidden md:flex flex-col justify-between overflow-hidden">
        <Link href='/' className="flex items-center gap-2 px-8 py-4">
        <Image src='/SURVENTIX.png' alt="SURVENTIX" width={100} height={70} />
        </Link>

        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
