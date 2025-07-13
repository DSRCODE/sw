"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

function generateRandomReferralCode(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
    .toUpperCase();
}

const Signup = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{6,14}$/, "Phone number is not valid")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = userCredential.user;
        await sendEmailVerification(user);
        const referralCode = generateRandomReferralCode();

        await setDoc(doc(db, "users", user.uid), {
          name: values.name,
          email: user.email,
          phoneNumber: values.phoneNumber,
          referralCode: referralCode,
          createdAt: new Date().toISOString(),
        });

        alert("A verification link has been sent to your email!");
        resetForm();
        router.push("/signin");
      } catch (err) {
        console.error(err);
        setErrors({ email: "Email already in use or invalid" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white h-full text-[#02000F] md:rounded-tl-4xl md:rounded-bl-4xl flex justify-center items-center">
      <div className="max-w-[400px] w-full px-4">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
          Welcome to Surventix
        </h1>
        <p className="text-center text-md text-background/70 sm:text-lg mb-10 mt-2">
          Register to create your first account on Surventix and start exploring
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              className={`border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className={`border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className={`border ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-sm text-red-500">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className={`border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-[#02000F]/20"
              } h-11`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#003B64] w-full text-white h-11 rounded-lg mt-4"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>

          <div className="text-center text-md text-background/70 sm:text-base mt-2">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#003B64] font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
