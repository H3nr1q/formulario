import { PlusCircle, UserPlus } from "lucide-react";
import InputMask from 'react-input-mask';

interface SimplePersonProps{
  changeCpf: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeName: (event: React.ChangeEvent<HTMLInputElement>) => void
  cpf: string
  name: string
  register: any
  errors: any
}

export function SimplePerson({
  cpf,
  changeCpf,
  name,
  changeName,
  register,
  errors,
}:SimplePersonProps){
  return(
    <>
    <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
      <div className="flex items-center gap-2 flex-1">
        <PlusCircle className="size-5 text-zinc-400" />
        <InputMask
          {...register("cpf")}
          mask="999.999.999-99"
          value={cpf}
          onChange={changeCpf}
          placeholder="CPF"
          className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
        />
      </div>
    </div>
    {errors.cpf && <span className="text-lime-300 px-3">{errors.cpf.message}</span>}
    <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
        <div className="flex items-center gap-2 flex-1">
          <UserPlus className="size-5 text-zinc-400" />
          <input
            {...register("name")} 
            type="text"
            name="name"
            value={name}
            onChange={changeName}
            placeholder="Digite nome"
            className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1" />
        </div>
      </div>
      {errors.name && <span className="text-lime-300 px-3">{errors.name.message}</span>}
      </>
  )
}
