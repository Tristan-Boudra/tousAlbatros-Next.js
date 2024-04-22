import { File, Library, MessageSquare } from "lucide-react";

const FileIcon = (
  <div className="flex bg-[#FFF9EB] dark:bg-[#241607] w-12 h-12 md:w-16 md:h-16 rounded-lg p-4 content-center items-center">
    <File
      className="flex text-secondary dark:text-secondary-foreground items-center mx-auto"
      size={30}
    />
  </div>
);

const MessageIcon = (
  <div className="flex bg-[#F2F9E9] dark:bg-[#072313] w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <MessageSquare
      className="flex text-[#BBE18B] items-center mx-auto"
      size={30}
    />
  </div>
);

const LibrairieIcon = (
  <div className="flex bg-[#D8F2FA] dark:bg-primary-foreground w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Library className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

export const contentIconPrestation = [
  {
    id: 0,
    icon: FileIcon,
    title: "Brochure web",
    subtitle:
      "Pour télécharger et imprimer la brochure de nos ateliers d'envol",
    linkPdf: "/documents/test.pdf",
  },
  {
    id: 1,
    icon: MessageIcon,
    title: "Contact",
    subtitle: "Pour recevoir une proposition d'ateliers sur mesure",
    linkPdf: "/contact",
  },
  {
    id: 2,
    icon: LibrairieIcon,
    title: "Actions éducatives",
    subtitle: "Cliquer pour visualiser la brochure",
    linkPdf: "/documents/test.pdf",
  },
];
