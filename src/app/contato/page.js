import Header from "@/components/layout/Header"
import CustomButton from "@/components/utils/CustomButton"

const Contato = () => {
    return (
      <>
        <Header />
        <h1>Contato</h1>
        <CustomButton title='Login' variant='red'/>
        <CustomButton title='Cadastre-se' variant='blue'/>
        <CustomButton title='Opções' variant='green'/>
        <CustomButton title='Sair' variant='yellow'/>
      </>
    )
  }
  
  export default Contato