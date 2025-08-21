import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doqsy - Making Healtcare accessible",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />

              <main className="min-h-screen">{children}</main>
              
              <footer className="bg-slate-800/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p>Made in Bharat 🤍</p>
                </div>
              </footer>
            </ThemeProvider>
        </body>

      </html>
    </ClerkProvider>
  );
}
