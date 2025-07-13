"use client";
import { ReactNode } from "react";
import "../i18n";

type Props = {
  children: ReactNode;
};

export default function ClientLayout({ children }: Props) {
  return <>{children}</>;
}
