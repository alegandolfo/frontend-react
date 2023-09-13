import './CustomButton.css'

const CustomButton = ({variant, title}) => {
  return (
    <button className={variant}>{title}</button>
  )
}

export default CustomButton