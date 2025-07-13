"use client";

import React from "react";
import {
  Link2,
  ShieldCheck,
  Key,
  MapPin,
  AlertTriangle,
  HelpCircle,
  FileInput,
  CheckCircle,
  ScanLine,
  ClipboardCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import TimelineItem from "./TimelineItem";

const SecurityFlowChart = () => {
  const { t } = useTranslation();

  const surveyStages = [
    {
      icon: <Link2 className="h-6 w-6" />,
      title: t("securityFlow.accessSurvey.title"),
      description: t("securityFlow.accessSurvey.description"),
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: t("securityFlow.provideConsent.title"),
      description: t("securityFlow.provideConsent.description"),
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: t("securityFlow.verification.title"),
      description: t("securityFlow.verification.description"),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t("securityFlow.tracking.title"),
      description: t("securityFlow.tracking.description"),
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: t("securityFlow.fraudProfiling.title"),
      description: t("securityFlow.fraudProfiling.description"),
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: t("securityFlow.redHerring.title"),
      description: t("securityFlow.redHerring.description"),
    },
    {
      icon: <FileInput className="h-6 w-6" />,
      title: t("securityFlow.surveyEntry.title"),
      description: t("securityFlow.surveyEntry.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: t("securityFlow.completeSurvey.title"),
      description: t("securityFlow.completeSurvey.description"),
    },
    {
      icon: <ScanLine className="h-6 w-6" />,
      title: t("securityFlow.exitHash.title"),
      description: t("securityFlow.exitHash.description"),
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: t("securityFlow.surveyComplete.title"),
      description: t("securityFlow.surveyComplete.description"),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-primary capitalize">
        {t("securityFlow.heading")}
      </h1>
      <div className="relative">
        {surveyStages.map((stage, index) => (
          <TimelineItem
            key={index}
            icon={stage.icon}
            title={stage.title}
            description={stage.description}
            isLast={index === surveyStages.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SecurityFlowChart;
