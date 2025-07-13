"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./ui/input";
import { useTranslation } from "react-i18next";

const PanelBook = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: () => {
      // ✅ Trigger PDF download if form is valid
      const link = document.createElement("a");
      link.href = "/PANEL BOOK 2025.pdf";
      link.download = "PANEL BOOK 2025.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className="text-xl font-semibold mb-6">{t("updatedPanelBook")}</h3>

      <div>
        <Input
          name="email"
          type="email"
          className={`h-12 ${
            formik.touched.email && formik.errors.email && "border-red-500"
          }`}
          placeholder={t("enterYourEmail")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#5CE1F2] border border-[#5CE1F2] duration-300 transition-all ease-in-out hover:bg-transparent hover:text-[#5CE1F2] mt-6 h-12 rounded-lg text-[#04021d] font-medium text-lg"
        >
          {t("download")}
        </button>
      </div>
    </form>
  );
};

export default PanelBook;
