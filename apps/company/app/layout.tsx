'use client';

import dynamic from 'next/dynamic';
import '../pages/styles.css';
const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          {children}
          <Toaster />
        </>
      </body>
    </html>
  );
}
