import './Modal.css'

const Modal = ({children, isOpen, setOpen}) => {
  
  if (!isOpen) return (<></>)
  
  return (
    <div className="modal">
      <main>
        {children}
        <br/><br/>
        <button onClick={() => setOpen(false)}>Cancelar</button>
      </main>
    </div>
  )
}

export default Modal