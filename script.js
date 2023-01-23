// isto serce para cocatenar meu codigo com a minha pagina ele pega os dados de HTML e transforma.
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button');

button.addEventListener("click", add)
// esse form serve para salvarmos dados
form.addEventListener("change", save)
// sempre que eu clicar no botão ''+'' ele devera adicionar uma data correspondente.
function add(){
    const today = new Date().toLocaleDateString('PT-BR').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

   
    if(dayExists){
        alert("Dia já incluso ❌")
        return
    }
    alert("Dia adicionado com sucesso ✅")
    nlwSetup.addDay(today);
}
function save(){
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))

}

//const data = {
 //   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//    journal: ['01-02'],
//    pills: ['01-03']
//}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
