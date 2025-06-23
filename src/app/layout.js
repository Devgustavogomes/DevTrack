
import "./globals.css";


export const metadata = {
  title: "Devtrack",
  description: "Veja as eststísticas do seu perfil ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex items-center justify-center min-h-screen bg-github`}
      >
        {children}
      </body>
    </html>
  );
}
