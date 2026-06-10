import { useEffect, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const PDF_PATH = '/r4v8k2.pdf';

const SilentQrPage = () => {
  const pdfUrl = useMemo(() => new URL(PDF_PATH, window.location.origin).toString(), []);

  useEffect(() => {
    const previousTitle = document.title;
    const existingRobotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previousRobotsContent = existingRobotsTag?.content;
    const robotsTag = existingRobotsTag ?? document.createElement('meta');

    if (!existingRobotsTag) {
      robotsTag.name = 'robots';
      document.head.appendChild(robotsTag);
    }

    document.title = 'QR';
    robotsTag.content = 'noindex, nofollow';

    return () => {
      document.title = previousTitle;

      if (previousRobotsContent) {
        robotsTag.content = previousRobotsContent;
      } else {
        robotsTag.remove();
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black p-6">
      <a href={pdfUrl} aria-label="Open PDF" className="block leading-none">
        <QRCodeSVG
          value={pdfUrl}
          size={320}
          level="H"
          marginSize={4}
          bgColor="#FFFFFF"
          fgColor="#000000"
          title="PDF QR code"
        />
      </a>
    </main>
  );
};

export default SilentQrPage;
