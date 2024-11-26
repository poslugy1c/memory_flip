import { data } from './data';
//
function App() {
  return (
    <section className={'container'}>
      <button className={'mx-auto mt-10 flex items-center justify-center rounded-2xl bg-green-800 px-10 py-2 text-2xl font-bold text-white'}>
        Start
      </button>
      {
        data.map((card) => {
          return (<div key={card.id}> 
            <img  src={card.imgUrl} alt={card.label} width={60} />
          </div>) 
        }
      )}
      <h1 className={'text-center text-4xl font-bold '}>Score: 0</h1>
    </section>
  )
}

export default App

