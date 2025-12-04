import CadastroField from "./CadastroField";

function Hero() {
  return (
    <div>
      <div className="hero bg-base-300 h-96">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Debitis, fuga. Accusamus repellendus ea, sapiente molestiae
              quam eos velit! Mollitia quas esse accusantium facilis aperiam
              quia temporibus delectus ullam est possimus.
            </p>
            <CadastroField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
