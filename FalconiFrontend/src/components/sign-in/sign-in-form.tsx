import SignInFields from "./sign-in-fields";
import Link from "next/link";
import HomeTemplate from "../common/homeTemplate";

export default function SignInForm() {
  return (
    <HomeTemplate
      title="Acesse sua conta"
      description="Bem-vindo! Por favor, insira seu ID para acessar sua conta."
    >
      <SignInFields />
      <div className="flex flex-row items-center justify-center gap-2">
        <Link href="/sign-up" className="text-neutral">Não tem uma conta?
          <span className="text-info"> Cadastre-se</span></Link>
      </div>
    </HomeTemplate>
  )
}
