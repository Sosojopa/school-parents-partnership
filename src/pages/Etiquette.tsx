
import React from "react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/layout/footer";
import EtiquetteHeader from "@/components/etiquette/EtiquetteHeader";
import CommunicationToneSection from "@/components/etiquette/CommunicationToneSection";
import MessageStructureSection from "@/components/etiquette/MessageStructureSection";
import DontDoSection from "@/components/etiquette/DontDoSection";
import ExamplesSection from "@/components/etiquette/ExamplesSection";
import ImportantNote from "@/components/etiquette/ImportantNote";
import DownloadSection from "@/components/etiquette/DownloadSection";

const Etiquette: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow py-10 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <EtiquetteHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <CommunicationToneSection />
            <MessageStructureSection />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <DontDoSection />
            <ExamplesSection />
          </div>
          
          <ImportantNote />
          
          <DownloadSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Etiquette;
