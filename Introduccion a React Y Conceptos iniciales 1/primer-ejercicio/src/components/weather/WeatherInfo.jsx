export const WeatherInfo = ({ weather, onClick }) => {
  const changeTittle = onClick;
  return (
    <button 
      onClick ={()=> changeTittle(weather)}
    >
    {weather}
  </button>
  )
}