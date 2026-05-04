import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'SkyHigh Edu | Psychometric Platform',
  description: 'Interactive presentation for the SkyHigh Edu Psychometric Intelligence Platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-stone-600 bg-[#f8f7f5] antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
