import ReactImg from '../assets/jsx-ui.png'

const descriptions = ['cool','core','important']
function randomWord(list){
  return list[Math.floor(Math.random()*list.length)]
}
export default function Header(){
    return(
      <header>
          <img src={ReactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {randomWord(descriptions)} React concepts you will need for almost any app you are
            going to build!
          </p>
  
          
        </header>
    );
  }
  