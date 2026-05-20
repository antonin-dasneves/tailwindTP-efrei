function App() {
    return (
        <>
        <header className="relative z-20 flex flex-row flex-auto justify-between">
            <p className="p-8 font-sans text-xl text-dark">
                Madelyn Torff
            </p>
            <div className="flex flex-row items-center justify-evenly">
                <p className="p-4 font-sans text-xl text-dark">
                    About
                </p>
                <p className="p-4 font-sans text-xl text-dark">
                    Projects
                </p>
                <p className="p-4 font-sans text-xl text-dark">
                    Contacts
                </p>
            </div>
        </header>
        <div className="min-h-screen bg-white font-sans text-dark">
            <p className="p-8 font-sans text-4xl text-primary">
                On teste
            </p>
        </div>
        </>
    );
}

export default App;