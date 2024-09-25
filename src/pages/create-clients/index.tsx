import { House, Map, HousePlus, Locate, Mail, Phone, Mailbox, Plus } from "lucide-react"
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { apiSearchCnpj, apiSearchZipCode } from "../../libs/axios";
import { EnterprisePerson } from "./enterprise-person";
import { SimplePerson } from "./simple-person";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"
import Select from 'react-select';
import { isValidCPF, isValidCNPJ } from '../../utils/validator';

const createClientFormSchema = z.object({
  name: z.string()
    .min(1, "Campo nome obrigartório")
    .refine((value) => {
      const nameParts = value.trim().split(' ');
      return nameParts.length > 1 && nameParts[1] !== '';
    }, {
      message: 'O nome deve conter pelo menos um sobrenome',
    }),
  email: z.string()
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  zipCode: z.string().min(1,'CEP Obrigatório'),
  address: z.string().min(1, "Endereço obrigatório"),
  number: z.string().refine((value) => {
    return value.trim() !== '' || value === 'SN';
    }, {
      message: 'O número da casa é obrigatório ou use "SN" para Sem Número',
    }),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  local: z.string().min(1, "Cidade obrigatório"),
  complement: z.string(),
  stateSelected: z.string().min(1, "Selecione uma UF"),
  cpf: z.string()
    .refine(isValidCPF, {
      message: 'CPF inválido',
    }),
  cnpj: z.string()
    .refine(isValidCNPJ, {
      message: 'CNPJ inválido',
    }),
})

type CreateClienteFormData  = z.infer<typeof createClientFormSchema>

export function CreateClient(){
  const [stateSelected, setStateSelected] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState ('');
  const [cnpj, setCnpj] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [local, setLocal] = useState('');
  const [nameEnterprise, setNameEnterprise] = useState('');
  const [fantasy ,setFantasy] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(false);
  const stateOptions = [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' },
  ];

  const handleStateChange = (selectedOption: any) => {
    setStateSelected(selectedOption ? selectedOption.value : '');
  };
  
  const [typePerson, setTypePerson] = useState<'juridica' | 'fisica'>('juridica');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypePerson(event.target.value as 'juridica' | 'fisica');
  };

  const changeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.toUpperCase());
  };

  const changeCnpj = (event: React.ChangeEvent<HTMLInputElement>) => {
    let cnpjSerching = event.target.value
    cnpjSerching = cnpjSerching.replace(/\./g, '').replace(/\//g, '').replace(/-/g, '');
    setCnpj(cnpjSerching);
    setValue("cnpj", cnpjSerching, {shouldValidate: true})
  };

  const changeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
    setValue("zipCode", zipCode, {shouldValidate: true})
  };

  const changeNameEnterprise = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameEnterprise(event.target.value);
  };

  const changeFantasy = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFantasy(event.target.value);
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value.toUpperCase());
    setValue("address", event.target.value)
  };

  const changeComplement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(event.target.value.toUpperCase());
  };

  const changeNumer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value? event.target.value.toUpperCase(): "SN");
    setValue("number", event.target.value? event.target.value.toUpperCase(): "SN", {shouldValidate: true} )
  };

  const changeNeighborhood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(event.target.value.toUpperCase());
  };

  const changeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(event.target.value.toUpperCase());
  };

  const searchZipCode = async (zipCode: string) => {
    try {
      zipCode = zipCode.replace(/\D/g, '');
      const response = await apiSearchZipCode.get(`/${zipCode}/json/`);
      setZipCode(response.data.cep);
      setAddress(response.data.logradouro.toUpperCase());
      setNeighborhood(response.data.bairro.toUpperCase());
      setComplement(response.data.complemento.toUpperCase());
      setLocal(response.data.localidade.toUpperCase());
      setStateSelected(response.data.uf);
      setValue("zipCode", response.data.cep, {shouldValidate: true})
      setValue("address", response.data.logradouro.toUpperCase(), {shouldValidate: true});
      setValue("neighborhood", response.data.bairro.toUpperCase(), {shouldValidate: true});
      setValue("local", response.data.localidade.toUpperCase(), {shouldValidate: true})
      setDisabled(true)
      
    } catch (error) {
        console.log('Erro ao buscar CEP');
      }
    };

  const handleBlurZipCode = () => {
    if(zipCode.length === 9){
      searchZipCode(zipCode)
    }
  }

  const searchCnpj = async (cnpj: string) => {
    try {
      const response = await apiSearchCnpj.get(`v1/cnpj/${cnpj}`,{
        headers: {Accept: 'application/json'}
      });
        setNameEnterprise(response.data.nome);
        setFantasy(response.data.fantasia);
        setEmail(response.data.email);
        setPhone(response.data.telefone);
        setZipCode(response.data.cep);
        searchZipCode(response.data.cep)
        setAddress(response.data.logradouro);
        setNumber(response.data.numero)
        setComplement(response.data.complemento);
        setLocal(response.data.municipio);
        setStateSelected(response.data.uf);
      } catch (error) {
        console.log('Erro ao buscar CNPJ');
      }
    };
  
  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const [output, setOutput] = useState('');
  const { 
    register, 
    handleSubmit,
    setValue, 
    formState: {errors} } = useForm<CreateClienteFormData>({
    resolver: zodResolver(createClientFormSchema)
  });


  function createClientForm(data:CreateClienteFormData) {
    console.log("🚀 ~ createClientForm ~ data:", data)
    setOutput(JSON.stringify(data, null, 2));
  }

  const onSubmit = (data: CreateClienteFormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (cnpj.length === 14) {
      searchCnpj(cnpj);
    }
    else{
      return
    }
  }, [cnpj]);

  useEffect(() => {
    if (cnpj.length !== "__.___.___/____-__") {
      setValue("email", email, { shouldValidate: true });
      setValue("address", address, { shouldValidate: true });
      setValue("number", number, {shouldValidate: true})
      setValue("local", local, {shouldValidate: true})
  }
  }, [email, address, number, local]);

  return (
    <div className="h-screen flex items-center justify-center bg-black bg-pattern bg-no-repeat bg-center shadow-shape gap-3">
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
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
        {typePerson === "fisica" && (
          <SimplePerson 
          changeName={changeName}
          changeCpf={changeCpf}
          cpf={cpf}
          name={name}
          errors={errors}
          register={register}
          />
        )}
          {typePerson === "juridica" && (
            <EnterprisePerson 
            changeCnpj={changeCnpj}
            cnpj={cnpj}
            fantasy={fantasy}
            nameEnterprise={nameEnterprise}
            register={register}
            errors={errors}
          />)}
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Mail className='text-zinc-400 size-5'/>
            <input 
              {...register("email")}
              type="text"
              placeholder="E-mail"
              onChange={changeEmail}
              value={email}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        {errors.email && <span className="text-lime-300 px-3">{errors.email.message}</span>}
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Phone className='text-zinc-400 size-5'/>
            <InputMask
              mask="(99)99999-9999" 
              onChange={changePhone}
              value={phone}
              placeholder="Telefone"
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className="flex items-center gap-2 flex-1">
            <Locate className='text-zinc-400 size-5'/>
            <InputMask
              {...register("zipCode")}
              mask="99999-999"
              placeholder="CEP"
              onChange={changeZipCode}
              onBlur={handleBlurZipCode}
              value={zipCode}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        {errors.zipCode && <span className="text-lime-300 px-3">{errors.zipCode.message}</span>}
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg  flex items-center justify-between gap-3'>
          <div className="flex items-center gap-2 flex-[4]">
            <House className='text-zinc-400 size-5'/>
            <input 
              {...register("address")}
              type="text"
              placeholder="Endereço"
              onChange={changeAddress}
              value={address}
              disabled={disabled}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Mailbox className='text-zinc-400 size-5'/>
              <input
                {...register("number")}
                type="text" 
                placeholder="SN"
                onChange={changeNumer}
                value={number}
                className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
                />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <HousePlus className='text-zinc-400 size-5'/>
            <input 
              type="text"
              placeholder="Complemento"
              onChange={changeComplement}
              value={complement}
              disabled={disabled}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>        
        </div>
        {errors.address && <span className="text-lime-300 px-3">{errors.address.message}</span>}
        {errors.number && <span className="text-lime-300 px-3">{errors.number.message}</span>}
        <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-between gap-2'>
          <div className="flex items-center gap-2 flex-[2]">
            <HousePlus className='text-zinc-400 size-5'/>
            <input
              {...register("neighborhood")} 
              type="text"
              placeholder="Bairro"
              onChange={changeNeighborhood}
              value={neighborhood}
              disabled={disabled}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>        
          <div className="flex items-center gap-2 flex-1">
            <Map className='text-zinc-400 size-5'/>
            <input
              {...register("local")} 
              type="text"
              placeholder="Cidade"
              onChange={changeLocal}
              value={local}
              disabled={disabled}
              className="bg-transparent text-lg text-zinc-100 placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Select
            options={stateOptions}
            value={stateOptions.find(opt => opt.value === stateSelected)}
            onInputChange={handleStateChange}
            placeholder="Selecione"
            isSearchable
            classNamePrefix="select"
            isDisabled={disabled}
            noOptionsMessage={() => 'UF não encontrada'}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: 'transparent',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: '#ffffff',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: '#e5e7eb',
              }),
            }}
          />
        </div>
        {errors.neighborhood && <span className="text-lime-300 px-3">{errors.neighborhood.message}</span>}
        {errors.local && <span className="text-lime-300 px-3">{errors.local.message}</span>}
      <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-bold flex items-center justify-center gap-2 hover:bg-lime-400 w-full h-11">
        <Plus className="sizen-5" />
          Salvar cliente
      </button>
      <div className="flex justify-around text-lime-300">
        <pre>{output}</pre>
      </div>
      </form>
      
    </div>
  )
}