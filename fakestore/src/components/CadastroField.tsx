import { useRef } from "react";

function CadastroField() {
  const modalOpen = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modalOpen.current?.showModal();
  };
  const closeModal = () => {
    modalOpen.current?.close();
  };
  return (
    <div>
      <button onClick={() => openModal()} className="btn btn-primary">Cadastre-se</button>
      {modalOpen && (
        <dialog ref={modalOpen} className="ml-20 md:ml-120 md:mt-50">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
            <legend className="fieldset-legend">Cadastro</legend>

            <label className="label">Nome</label>
            <input
              type="text"
              className="input"
              placeholder="My awesome page"
            />

            <label className="label">Email</label>
            <input
              type="text"
              className="input"
              placeholder="my-awesome-page"
            />

            <label className="label">Senha</label>
            <input type="text" className="input" placeholder="Name" />
            <button className="btn btn-primary">Cadastrar</button>
            <button className="btn btn-secondary" onClick={() => closeModal()}>Fechar</button>
          </fieldset>
          
        </dialog>
      )}
    </div>
  );
}

export default CadastroField;
