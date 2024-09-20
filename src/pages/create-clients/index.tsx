import { Factory, Hotel, House, Map, HousePlus, Locate, Mail, Phone, UserPlus, Mailbox, PlusCircle } from "lucide-react"
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';
import { apiSearchCnpj, apiSearchZipCode } from "../../libs/axios";

export function CreateClient(){
  const uf = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const [stateSelected, setStateSelected] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [local, setLocal] = useState('');
  const [name, setName] = useState('');
  const [fantasy ,setFantasy] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleStateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
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
    let cnpjSerching = event.target.value
    cnpjSerching = cnpjSerching.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');
    setCnpj(cnpjSerching);
  };

  const changeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeFantasy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFantasy(event.target.value);
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changeComplement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(event.target.value);
  };

  const changeNumer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const changeNeighborhood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(event.target.value);
  };

  const searchZipCode = async (cep: string) => {
    try {
      const response = await apiSearchZipCode.get(`/${cep}/json/`);
      
      setCep(response.data.cep);
      setAddress(response.data.logradouro.toUpperCase());
      setNeighborhood(response.data.bairro.toUpperCase());
      setComplement(response.data.complemento.toUpperCase());
      setLocal(response.data.localidade.toUpperCase());
      setStateSelected(response.data.uf)
      
    } catch (error) {
        console.log('Erro ao buscar CEP');
      }
    };

  const handleBlurZipCode = () => {
    if(cep.length === 9){
      searchZipCode(cep)
    }
  }

  const searchCnpj = async (cnpj: string) => {
    try {
      const response = await apiSearchCnpj.get(`v1/cnpj/${cnpj}`,{
        headers: {Accept: 'application/json'}
      });
        setName(response.data.nome);
        setFantasy(response.data.fantasia);
        setEmail(response.data.email);
        setPhone(response.data.telefone);
        setCep(response.data.cep);
        setAddress(response.data.logradouro);
        setNumber(response.data.numero)
        setComplement(response.data.complemento);
        setLocal(response.data.municipio);
        setStateSelected(response.data.uf);

      } catch (error) {
        console.log('Erro ao buscar CNPJ');
      }
    };

  const handleBlurCnpj = () => {
    if(cnpj.length === 14){
      searchCnpj(cnpj)
    }
  }
  
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
              onBlur={handleBlurCnpj}
              placeholder="CNPJ"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Factory className="size-5 text-zinc-400"/>
            <input 
              type="text"
              name="razao_social"
              placeholder="Digite a Razao Social"
              value={name}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Hotel className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name="fantasy_name"
              placeholder="Digite nome fantasia"
              value={fantasy ? fantasy : name}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Mail className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name= "email"
              placeholder="E-mail"
              value={email}
              onChange={changeEmail}
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
              placeholder="Telefone"
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
              onChange={changeZipCode}
              onBlur={handleBlurZipCode}
              name= "zip"
              placeholder="CEP"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg  flex items-center justify-between gap-3'>
          <div className="flex items-center gap-2 flex-[4]">
            <House className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name= "endereco"
              placeholder="Endereço"
              value={address}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Mailbox className='text-zinc-400 size-5'/>
              <input
                type="text" 
                name= "numero"
                placeholder="SN"
                value={number ? number : "SN" }
                className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
              />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <HousePlus className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name= "complemento"
              placeholder="Complemento"
              onChange={changeComplement}
              value={complement}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>        
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-between gap-2'>
          <div className="flex items-center gap-2 flex-[2]">
            <HousePlus className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name= ""
              placeholder="Bairro"
              value={neighborhood}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>        
          <div className="flex items-center gap-2 flex-1">
            <Map className='text-zinc-400 size-5'/>
            <input 
              type="text"
              name= "city"
              placeholder="Cidade"
              value={local}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
             <select
                id="estado"
                className={`bg-transparent text-lg outline-none flex-1 ${
                  stateSelected ? 'text-zinc-400' : 'text-zinc-400'
                }`}
                value={stateSelected}
                onChange={handleStateChange}
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