//?React Model Using Functional Componentr
/*
!Purpose of react modal.
React JS utilizes the Modal Component as a solid foundation for creating dialogs, lightboxes, popovers, etc. The modal component represents a dialogue box that contains some information, opens when the button is clicked, and closes when clicked outside.
->A modal in React is a component that displays content in a layer above the main application content, typically used for dialogs, forms, alerts, or any content that requires user interaction without navigating away from the current page. Modals can enhance user experience by keeping the user on the same page while interacting with additional content.

Key Characteristics of a Modal
Overlay: Typically, a modal will have a background overlay that partially obscures the main content, focusing the user's attention on the modal content.
Central Content: The modal content itself is usually centered on the screen.
Closable: A modal usually has a way to close it, often via a close button (e.g., an "X" in the corner), by clicking outside the modal, or by pressing the "Escape" key.
*/
import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Test() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div>this is a div</div>
        <input />
      </Modal>
    </div>
  )
}
