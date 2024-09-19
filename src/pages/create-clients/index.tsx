import { Factory, Hotel, House, Map, HousePlus, Locate, Mail, Phone, UserPlus, Mailbox, PlusCircle } from "lucide-react"
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';


export function CreateClient(){
  const uf = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const [stateSelected, setStateSelected] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');

  const handleEstadoChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setStateSelected(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  
  const [typePerson, setTypePerson] = useState<'juridica' | 'fisica'>('juridica');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypePerson(event.target.value as 'juridica' | 'fisica');
  };

  const changeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const changeCnpj = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(event.target.value);
  };

  const changeCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };
  
  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black bg-pattern bg-no-repeat bg-center shadow-shape gap-3">
      <form className='space-y-3'>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl text-zinc-400 font-semibold">Cadastro de Cliente</h2>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-3'>
          <div className="text-lg text-zinc-400 flex justify-center gap-3 flex-1">
            <input 
              type="radio"
              name="typePerson"
              value="fisica"
              checked={typePerson === 'fisica'}
              onChange={handleChange}
            /> Pessoa Fisica
            <input 
              type="radio"
              name="typePerson"
              value="juridica"
              checked={typePerson === 'juridica'}
              onChange={handleChange}
            /> Pessoa Juridica
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <PlusCircle className="size-5 text-zinc-400"/>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={changeCpf}
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
            <InputMask
              mask="99.999.999/9999-99"
              value={cnpj}
              onChange={changeCnpj}
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
            <InputMask
              mask="(99)99999-9999" 
              value={phone}
              onChange={changePhone}
              placeholder="Digite sei telefone"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Locate className='text-zinc-400 size-5'/>
            <InputMask
              mask="99999-999"
              value={cep}
              onChange={changeCep}
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
                  stateSelected ? 'text-zinc-400' : 'text-zinc-400'
                }`}
                value={stateSelected}
                onChange={handleEstadoChange}
              >
                <option value="">Selecione</option>
                {uf.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
        </div>
      </form>
    </div>
  )
}