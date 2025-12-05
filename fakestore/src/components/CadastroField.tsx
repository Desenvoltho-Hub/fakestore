import { useContext, useState } from "react";
import { useModal } from "../hooks/useModal";


import { useHandleChange } from "../hooks/useHandle";
import { UserContext } from "../contexts/UserContext";


function CadastroField() {
const {modal, openModal, closeModal} = useModal()
const [passLength, setPassLength] = useState()
const {register,errors,handleSubmit } = useHandleChange()
const {cadastroFake} = useContext(UserContext)

  return (
    <div>
      <button onClick={() => openModal()} className="btn btn-primary">Cadastre-se</button>
      {modal && (
        <dialog ref={modal} className="ml-20 md:ml-120 md:mt-50" onSubmit={handleSubmit(cadastroFake)}>
          <form >
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
            <legend className="fieldset-legend">Cadastro</legend>

            <label className="label">Nome</label>
            <input
              type="text"
              className="input"
              placeholder="Nome"
              {...register('username', {required: 'O nome é obrigatório'})}
            />

            <label className="label">Email</label>
            <input
              type="text"
              className="input"
              placeholder="my-awesome-page"
            />

            <label className="label">Senha</label>
            <input type="text" className="input" placeholder="Name" />
            <button className="btn btn-primary" type="submit">Cadastrar</button>
            <button className="btn btn-secondary" onClick={() => closeModal()}>Fechar</button>
          </fieldset>
          </form>
          
          
        </dialog>
      )}
    </div>
  );
}

export default CadastroField;
