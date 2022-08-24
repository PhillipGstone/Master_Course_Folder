import { useRef } from 'react'

const Modal = (props) => {
    const modalRef = useRef()

    // useRef hook lets you select a specific element via the DOM
    const handleClick = (e) => {
        // checking if the referenced element is the same as what you clicked on
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }

    // refernce applied to the gray background for the modal not the card itself
    return (
        <div className="modalOverlay" ref={modalRef} onClick={handleClick}>
            <div className="animalModal">
                <img src={props.animal.image_link} alt="animal"/>
                <div>
                    <h3>{props.animal.name}</h3>
                    <p>{props.animal.animal_type}</p>
                    <button onClick={() => props.closeModal(false)}>Close Modal</button>
                </div>
            </div>
        </div>
    )
}

export default Modal