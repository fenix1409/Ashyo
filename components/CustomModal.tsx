import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import React, { ReactNode, SetStateAction } from 'react'


interface ModalType {
    children:ReactNode
    isOpen: boolean
    isLogin:"login" | "createUser"
    onOpenChange: React.Dispatch<SetStateAction<boolean>>
    setIsLogin: React.Dispatch<SetStateAction<"login" | "createUser">>
}
const CustomModal:React.FC<ModalType> = ({setIsLogin, children, isOpen, onOpenChange, isLogin}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            <ModalHeader className='flex items-center gap-5 justify-center'>
              <p onClick={() => setIsLogin("login")} className={`text-[20px] cursor-pointer ${isLogin === "login" ? "text-orange-400" : ""}`}>Login</p>
              <p onClick={() => setIsLogin("createUser")} className={`text-[20px] cursor-pointer ${isLogin === "createUser" ? "text-orange-400" : ""}`}>Create User</p>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomModal