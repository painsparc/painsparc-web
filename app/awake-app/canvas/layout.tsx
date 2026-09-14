import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvas Protocol Session | Active",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CanvasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}