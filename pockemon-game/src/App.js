import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import urlBG1 from "./Assets/bg1.jpg";
import urlBG2 from "./Assets/bg3.jpg";

const App = () => {
  return (
    <>
      <Header title="Header text" descr="Header description" />
      <Layout
        title="Layout 1 text"
        descr="Layout 1 description"
        urlBg={urlBG1}
      />
      <Layout
        title="Layout 2 text"
        descr="Layout 2 description"
        colorBg="red"
      />
      <Layout
        title="Layout 3 text"
        descr="Layout 3 description"
        urlBg={urlBG2}
      >
        <p>Some text...</p>
        <p>Some text...</p>
        <p>Some text...</p>
        </Layout>
      <Footer />
    </>
  );
};

export default App;
