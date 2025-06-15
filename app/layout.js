import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MedV - Doctors Appointment App",
  description: "Connect with Doctors Anytime-Anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster richColors />

            <footer className="bg-zinc-800 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="text-lg">
                  Built with ❤️ and passion to bring healthcare closer to you.
                  <br />
                  Empowering lives with technology – <strong>MedV</strong> © {new Date().getFullYear()}
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
