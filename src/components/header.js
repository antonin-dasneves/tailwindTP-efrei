export default function Header(){
    return(
        <>
        <header className="px-8 relative z-20 flex flex-row flex-auto justify-between">
            <p className="p-8 font-sans text-xl text-dark">
                Antonin DAS NEVES
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
        </>
    );
}