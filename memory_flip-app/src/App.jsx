import Card from './component/Card';
import { data } from './data';
import { useApp } from './useApp';
//
function App() {
  const {cards, shuffleCards, handleSelect, score, firstCard, secondCard, waiting} = useApp({initialCards: data})
  return (
    <section className={'container'}>
      <button onClick={shuffleCards} 
       className={'mx-auto mt-10 flex items-center justify-center rounded-2xl bg-green-800 px-10 py-2 text-2xl font-bold text-white'}>
        Start
      </button>
      <div className='mx-auto my-8 grid max-w-xl grid-cols-5 gap-4'>
      {
        cards.map((card) => {
          return (

           <Card key={card.id} card={card} disabled={waiting} opened={card.matched || firstCard === card || secondCard === card} selectionHandler={handleSelect}/> 

          // <div
          // className='flex aspect-square cursor-pointer flex-col items-center justify-center
          //  rounded-2xl bg-gradient-to-r from-[#775859] to-[#32161F] p-4 
          //  shadow-2xl shadow-black duration-300 hover:shadow-xl hover:shadow-black'
          // key={card.id}
          // onClick={() => {
          //   if(!waiting && !(card.matched || firstCard === card || secondCard === card)) {
          //     handleSelect(card)
          //   } 
          //   }} > 
          //   <img className={`${card.matched || firstCard === card || secondCard === card ? "" : "[transform:rotateY(-90deg)]"} absolute duration-300 `}  src={card.imgUrl} alt={card.label} width={60} />
          // </div>
          
          )
        }
      )
    }
      </div>
      <h1 className={'text-center text-4xl font-bold '}>Score: {score}</h1>
    </section>
  )
}

export default App

