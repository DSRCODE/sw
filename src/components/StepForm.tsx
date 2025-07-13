import { useTranslation } from "react-i18next";

export default function StepForm() {
  const { t } = useTranslation();

  return (
    <div className="container py-12 flex md:flex-col md:block gap-6 md:gap-0">
      <div className="relative flex flex-col md:flex-row min-w-[50px] md:min-w-auto md:justify-between items-center mb-10 max-w-[60%] mx-auto ">
        <div className="flex flex-col items-center relative z-10 h-1/2 md:h-auto">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
            1
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10  mt-10 md:mt-0">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
            2
          </div>
        </div>

        <div className="absolute top-8 left-0 right-0 h-0.5 flex items-center">
          <div className="w-full border-t-2 border-dashed border-gray-300"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        {/* Mode 1 Description */}
        <div className="md:w-1/2 md:pr-8 md:text-center">
          <p className="font-semibold text-2xl mb-8">
            {t("stepForm.mode1.heading")}
          </p>

          <p className="text-justify whitespace-pre-line">
            {t("stepForm.mode1.description")}
          </p>
        </div>

        {/* Mode 2 Description */}
        <div className="md:w-1/2 md:pl-8 md:text-center mt-10 md:mt-0">
          <p className="font-semibold text-2xl mb-8">
            {t("stepForm.mode2.heading")}
          </p>

          <p className="text-justify whitespace-pre-line">
            {t("stepForm.mode2.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
