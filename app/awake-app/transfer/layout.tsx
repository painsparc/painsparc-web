import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transfer Protocol Session | Active",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TransferLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}