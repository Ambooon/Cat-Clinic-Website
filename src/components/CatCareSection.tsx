import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function CatCareSection() {
  const [openKey, setOpenKey] = useState<number | null>(null);

  function handleToggle(key: number) {
    setOpenKey((prevState) => {
      return key !== prevState ? key : null;
    });
  }

  return (
    <div className="w-full">
      <section className="grid min-h-96 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex justify-around items-center ">
          <img
            className="max-h-72 md:max-h-80 rounded-2xl"
            src="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Brown Cat"
          />
          <img
            className="max-h-72 md:max-h-80 rounded-2xl"
            src="https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="White Cat"
          />
        </div>
        <div className="px-4">
          <h2 className="font-bold text-4xl py-2">Why Need Cat Care?</h2>
          <p className="text-slate-500 mb-6">
            Everyone wants their cats to be happy and healthy, and to look and
            feel their best.
          </p>
          <div>
            <Accordion
              key={0}
              title={"Achieve superior detangling performance"}
              content={
                "Everyone wants their cats to be happy and healthy, and to look and feel their best. Now the same sensory and functional benefits of today's advanced beauty and cat care."
              }
              onToggle={() => handleToggle(0)}
              isOpen={0 === openKey}
            />
            <Accordion
              key={1}
              title={"Offer ultra shine and softness"}
              content={
                "Everyone wants their cats to be happy and healthy, and to look and feel their best. Now the same sensory and functional benefits of today's advanced beauty and cat care."
              }
              onToggle={() => handleToggle(1)}
              isOpen={1 === openKey}
            />
            <Accordion
              key={2}
              title={"Improve moisturization and skin protection"}
              content={
                "Everyone wants their cats to be happy and healthy, and to look and feel their best. Now the same sensory and functional benefits of today's advanced beauty and cat care."
              }
              onToggle={() => handleToggle(2)}
              isOpen={2 === openKey}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

type AccordionPropType = {
  title: string;
  content: string;
  onToggle: () => void;
  isOpen: boolean;
};

function Accordion({ title, content, onToggle, isOpen }: AccordionPropType) {
  return (
    <div
      className="border-b border-slate-300 py-2  hover:cursor-pointer"
      onClick={() => onToggle()}
    >
      <div className="flex justify-between items-center mb-2 ">
        <p className="font-semibold text-xl">{title}</p>
        <button>
          {isOpen ? (
            <FaCaretUp className="text-myWhite bg-myBlue-dark rounded-sm" />
          ) : (
            <FaCaretDown className="text-myWhite bg-myBlue-light rounded-sm" />
          )}
        </button>
      </div>
      {isOpen && <p className="text-slate-500">{content}</p>}
    </div>
  );
}

export default CatCareSection;
