import LoginField from "./LoginField";

function NavBar() {


    return (  
    
        <div className="flex bg-accent justify-between items-center">
            <div>
                <img src="/fakestore.png" alt="logo" className="p-5 w-64" />
            </div>
            <div className="pr-10"> 

            <LoginField/>
            </div>
            
        </div>
    );
}

export default NavBar;