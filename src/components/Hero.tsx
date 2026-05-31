import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-uliBlue text-white py-20 text-center">
      <h1 className="text-5xl font-display mb-4">
        {t("greeting")}
      </h1>
      <p className="text-xl max-w-xl mx-auto">
        {t("manifesto")}
      </p>
    </section>
  );
}
