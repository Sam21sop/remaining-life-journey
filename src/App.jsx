import CountdownTimer from "./components/CountdownTimer/CountdownTimer"


function App() {

  return (
    <>
      <div className="flex justify-center flex-col place-items-center h-[100vh] bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <h1 className="text-5xl font-bold m-4 p-4 text-black bg-slate-50 rounded-md"> Remaining Life Journey! </h1>
        <CountdownTimer dob={'1998-12-21'} />
      </div>
    </>
    
  )
}

export default App
