import { Factory, Hotel, House, Locate, Mail, Phone, UserPlus } from "lucide-react"

export function CreateClient(){
  return (
    <div>
      <div>
        <h1>Cadastro de Cliente</h1>
      </div>
      <form>
        <div>
          <input 
            type="radio"
            value="f"
          /> Física
          <input 
            type="radio"
            value="j"
          /> Juridica
        </div>
        <div>
          <UserPlus />
          <input 
            name="name"
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <Factory />
          <input 
            name="razao_social"
            placeholder="Digite sua razao social"
          />
        </div>
        <div>
          <Hotel />
          <input 
            name="fantasy_name"
            placeholder="Digite nome fantasia"
          />
        </div>
        <div>
          <Mail />
          <input 
            name= "email"
            placeholder="Digite eu e-mail"
          />
        </div>
        <div>
          <Phone />
          <input 
            name= "phone"
            placeholder="Digite sei telefone"
          />
        </div>
        <div>
          <Locate />
          <input 
            name= "zip"
            placeholder="Informe seu CEP"
          />
        </div>
        <div>
          <House />
          <input 
            name= "endereco"
            placeholder="Digite seu endereço"
          />
          <input 
            name= "numero"
            placeholder="Nro"
          />
          <input 
            name= "complemento"
            placeholder="Complemento"
          />
          <select>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option selected value="BA">BA</option>
          </select>
          <input 
            name= "city"
            placeholder="Cidade"
          />
        </div>
        <div>

        </div>
        
      </form>
    </div>
  )
}