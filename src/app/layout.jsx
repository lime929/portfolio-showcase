import './globals.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

export const metadata = {
  title: "Liliana Mendez | Portfolio",
  description:
    "Liliana Mendez's portfolio showcasing web development projects, skills, and experience in frontend development, UI/UX design, and responsive web design.",
  keywords: [
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend Development",
    "UI/UX Design",
    "Responsive Design",
    "Web Design",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
  ],
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
         <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Cedarville+Cursive&family=Stint+Ultra+Condensed&family=Syne:wght@400..800&family=Ultra&display=swap"
        />
      </head>
      <body>      
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}