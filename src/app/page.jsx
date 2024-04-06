import About from "@/components/ui/About";
import Buy from "@/components/ui/Buy";
import DexBox from "@/components/ui/DexBox";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Note from "@/components/ui/Note";
import Token from "@/components/ui/Token";

const Home = () => {
  return (
    <>
      <main className="container">
        <Header />
        <About />
        <Note />
        <Buy />
        <Token />
        <DexBox />
      </main>
        <Footer />
    </>
  );
};

export default Home;
