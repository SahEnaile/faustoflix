import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormularioComponent from "../../components/Form"
import './styles.css'

const Contact = () => {
    return(
        <div>    
            <Header />    
            <h1 className="tiform"> Deseja Receber Novidades de FIlmes? Inscreva-se!!</h1>
            <FormularioComponent />
            <Footer />    
        </div>
    )
}
export default Contact;