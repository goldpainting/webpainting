import React from "react";

const PDFViewer = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-[#232323]">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Información Adicional</h2>
      <div className="w-full max-w-4xl h-175 border-2 border-yellow-400 rounded overflow-hidden bg-white">
        <iframe
          src="/doc/Home_Gold_Lion_Painting_Inc_2000_LETHAL%20(1).pdf"
          title="Gold Lion Painting PDF"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default PDFViewer;
