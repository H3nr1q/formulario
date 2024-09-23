import { Factory, Hotel, PlusCircle } from "lucide-react";
import InputMask from 'react-input-mask';

interface EnterprisePersonProps{
  cnpj: string
  changeCnpj: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlurCnpj: () => void
  nameEnterprise: string
  fantasy: string
  register: any
  errors: any
}

export function EnterprisePerson({
  cnpj,
  changeCnpj,
  handleBlurCnpj,
  fantasy,
  nameEnterprise,
  register,
  errors,
}: EnterprisePersonProps){
  return(
    <><div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
      <div className="flex items-center gap-2 flex-1">
        <PlusCircle className="size-5 text-zinc-400" />
        <InputMask
          {...register("cnpj")}
          mask="99.999.999/9999-99"
          value={cnpj}
          onChange={changeCnpj}
          onBlur={handleBlurCnpj}
          placeholder="CNPJ"
          className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1" />
      </div>
    </div>
    {errors.cnpj && <span className="text-lime-300 px-3">{errors.cnpj.message}</span>}
    <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
        <div className="flex items-center gap-2 flex-1">
          <Factory className="size-5 text-zinc-400" />
          <input
            type="text"
            name="razao_social"
            placeholder="Digite a Razao Social"
            value={nameEnterprise}
            disabled={nameEnterprise != ''}
            className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1" />
        </div>
      </div><div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
        <div className="flex items-center gap-2 flex-1">
          <Hotel className='text-zinc-400 size-5' />
          <input
            type="text"
            name="fantasy_name"
            placeholder="Digite nome fantasia"
            value={fantasy ? fantasy : nameEnterprise}
            disabled={(fantasy || nameEnterprise) != ''}
            className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1" />
        </div>
      </div></>
  )
}