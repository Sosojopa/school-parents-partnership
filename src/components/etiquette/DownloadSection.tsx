
import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg bg-muted/50 p-6 rounded-lg border border-accent">
        <h3 className="font-semibold text-center mb-3">Памятка по цифровому этикету</h3>
        <div className="flex items-center justify-center mb-4">
          <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Скачать PDF-версию
          </a>
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Распечатайте и используйте как шпаргалку для быстрого доступа к основным правилам
        </p>
      </div>
    </div>
  );
};

export default DownloadSection;
