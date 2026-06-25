import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AwakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Enforces pure black, kills scrollbars, and prevents text selection to maintain a sterile canvas
    <div className={`${inter.className} bg-black min-h-screen w-full overflow-hidden select-none`}>
      {children}
    </div>
  );
}