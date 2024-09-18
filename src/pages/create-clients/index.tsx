import { Factory, Hotel, House, Map, HousePlus, Locate, Mail, Phone, UserPlus, Mailbox, PlusCircle } from "lucide-react"
import { SetStateAction, useState } from "react";

export function CreateClient(){
  const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const handleEstadoChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEstadoSelecionado(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  console.log('Estado selecionado:', estadoSelecionado);
  

  return (
    <div className="h-screen flex items-center justify-center bg-black bg-pattern bg-no-repeat bg-center shadow-shape gap-3">
      <form className='space-y-3'>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl text-zinc-400 font-semibold">Cadastro de Cliente</h2>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-3'>
          <div className="text-lg text-zinc-400 flex justify-center gap-3 flex-1">
            <input 
              className="flex items-end"
              type="radio"
              value="f"
            /> Física
            <input 
              className="flex items-start"
              type="radio"
              value="j"
            /> Juridica
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <PlusCircle className="size-5 text-zinc-400"/>
            <input 
              type="text" 
              name="name"
              placeholder="CPF"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <UserPlus className="size-5 text-zinc-400"/>
            <input 
              type="text" 
              name="name"
              placeholder="Digite nome"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <PlusCircle className="size-5 text-zinc-400"/>
            <input 
              type="text" 
              name="name"
              placeholder="CNPJ"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Factory className="size-5 text-zinc-400"/>
            <input 
              name="razao_social"
              placeholder="Digite a Razao Social"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Hotel className='text-zinc-400 size-5'/>
            <input 
              name="fantasy_name"
              placeholder="Digite nome fantasia"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Mail className='text-zinc-400 size-5'/>
            <input 
              name= "email"
              placeholder="Digite eu e-mail"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Phone className='text-zinc-400 size-5'/>
            <input 
              name= "phone"
              placeholder="Digite sei telefone"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Locate className='text-zinc-400 size-5'/>
            <input 
              name= "zip"
              placeholder="Informe seu CEP"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <House className='text-zinc-400 size-5'/>
            <input 
              name= "endereco"
              placeholder="Digite seu endereço"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
            <Mailbox className='text-zinc-400 size-5'/>
            <input 
              name= "numero"
              placeholder="SN"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <HousePlus className='text-zinc-400 size-5'/>
            <input 
              name= "complemento"
              placeholder="Complemento"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>        
          <div className="flex items-center gap-2 flex-1">
            <Map className='text-zinc-400 size-5'/>
            <input 
              name= "city"
              placeholder="Cidade"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
             <select
                id="estado"
                className={`bg-transparent text-lg outline-none flex-1 ${
                  estadoSelecionado ? 'text-zinc-400' : 'text-zinc-400'
                }`}
                value={estadoSelecionado}
                onChange={handleEstadoChange}
              >
                <option value="">Selecione</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
        </div>
      </form>
    </div>
  )
}