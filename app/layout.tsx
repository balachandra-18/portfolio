import type { Metadata } from "next";
import "./tailwind.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balachandra S — CS Student & Full-Stack Developer",
  description: "Personal portfolio of Balachandra S, Computer Science student at Bangalore Institute of Technology (BIT) and full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                        m.target.removeAttribute('bis_skin_checked');
                      }
                    }
                  });
                  observer.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['bis_skin_checked'] });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F5F5F7] dark:bg-[#08080A] text-[#1D1D1F] dark:text-[#F5F5F7] antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
