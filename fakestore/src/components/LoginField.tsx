import { useRef } from "react";

function LoginField() {
  const modal = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modal.current?.showModal();
  };
  const closeModal = () => {
    modal.current?.close();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => openModal()}>
        Login
      </button>
      {modal && (
        <dialog ref={modal} className="md:ml-120 md:mt-30">
          <form>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Login</button>
              <button className="btn btn-primary" onClick={() => closeModal()}>
                Fechar
              </button>
            </fieldset>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default LoginField;
