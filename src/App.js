import Header from "./components/header";
import BgImage from "./components/bgImage";

function App() {
    return (
        <>
        <Header />
        <BgImage />
        <div className="min-h-screen bg-white font-sans text-dark">
            <p className="p-8 font-sans text-4xl text-primary">
                On teste
            </p>
        </div>
        </>
    );
}

export default App;