import { useRef } from "react"

export const useModal = () => {
    const modal = useRef<HTMLDialogElement>(null)
    const openModal = () => {
        modal.current?.showModal()
    }
    const closeModal = () => {
        modal.current?.close()
    }
    return {
        modal, openModal, closeModal
    }
}