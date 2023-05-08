import Form from './Components/Form'

function App() {
  return (
    <div className="App pt-16 pb-20 px-4 max-w-7xl mx-auto sm:px-6 lg:pb-28 lg:px-8">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 text-center sm:text-5xl">Ma todo liste</h2>
      <p className="mt-3 mx-auto text-xl text-gray-500 text-center sm:mt-4">Fait avec tailwind et react</p>

      <Form />
    </div>
  );
}

export default App;
