import NavBar from "../../nav-bar"
import Footer from "../../footer"
import LoginModal from "../../login-modal"
const HomeLayout =({children})=>{
    return (
        <div className="App">
            <NavBar />
            <main className="main-content">
            {children}
            </main>
            <Footer />
            <LoginModal />
        </div>
    )
}
export default HomeLayout