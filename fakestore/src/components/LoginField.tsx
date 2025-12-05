import { useContext, useState } from "react";
import { useModal } from "../hooks/useModal";
import { useHandleChange } from "../hooks/useHandle";
import { type LoginForm } from "../utils/type";
import { UserContext } from "../contexts/UserContext";

function LoginField() {
  const { modal, openModal, closeModal } = useModal();
  const { errors, handleSubmit, register } = useHandleChange<LoginForm>();
  const { login } = useContext(UserContext);
  const [valiDation, setValidation] = useState('')
  console.log(valiDation)
  
  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Login
      </button>
      {modal && (
        <dialog
          ref={modal}
          className="md:ml-120 md:mt-30"
          onSubmit={handleSubmit(login)}
        >
          <form>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Nome</label>
              <input
                type="text"
                className="input"
                placeholder="Nome"
                
                onChange={(e) => setValidation(e.target.value)}

              />
              <div className={valiDation.length >= 20 ? 'text-red-500' : 'text-green-400'}>

              {valiDation.length}/20
              </div>
          
              {errors.username && <h1>{errors.username.message}</h1>}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password", {
                  required: "O campo password é obrigatório",
                })}
              />
              {errors.password && (
                <h1>
                  {errors.password.message}
                </h1>
              )}
              <button className="btn btn-neutral mt-4" type="submit" disabled={valiDation.length <= 6 ? true : false}>
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => closeModal()}
              >
                Fechar
              </button>
            </fieldset>
          </form>

          <div>
            <h1></h1>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default LoginField;
