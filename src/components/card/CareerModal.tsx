import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

export default function CareerModal({
  title,
  content,
  bg
}: {
  title: string;
  content: string[];
  bg: string
}) {
  const { t } = useTranslation();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-4 border-[1.5px] border-white py-2.5 px-4">
          {t("readMore")}
        </button>
      </DialogTrigger>
      <DialogContent className={"sm:max-w-2xl " + bg}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-start">{title}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div>
          {content.map((item, index) => (
            <p key={index} className="md:text-lg text-sm mb-4 ">
              {item}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
