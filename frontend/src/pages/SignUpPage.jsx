import {
  Eye,
  EyeOff,
  Link2,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim())
      return toast.error("Nome completo é obrigatório");
    if (!formData.email.trim()) return toast.error("Email é obrigatório");
    if (!/\S+@\S.\S+/.test(formData.email))
      return toast.error("Formato de email inválido");
    if (!formData.password.trim()) return toast.error("Senha é obrigatória");
    if (formData.password.length < 6)
      return toast.error("Senha deve ter no mínimo 6 caracteres");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success === true) {
      signUp(formData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Crie sua conta</h1>
              <p className="text-base-content/60">
                Comece com sua conta gratuira
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Nome completo</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-o pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Seu nome completo"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-o pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Senha</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Carregando...
                </>
              ) : (
                "Criar conta"
              )}
            </button>
          </form>

          <div className="flex flex-col items-center gap-2">
            <p className="text-base-content/60">Já possui uma conta? {""}</p>
            <Link to="/login" className="text-primary">
              <div className="w-80 flex items-center justify-center p-2 gap-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                <Link2 className="size-5" />
                Logar
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AuthImagePattern
        title="Junte-se à nossa comunidade"
        subtitle="Conecte-se com amigos, compartilhe momentos, e mantenha contato com seus entes queridos."
      />
    </div>
  );
};

export default SignUpPage;
