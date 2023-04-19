import { armchairImage } from "../../productImage/armchairImg.jsx";

function App({ params }) {
  const chosenIndex = params.id - 1;
  const chosenArmchair = armchairImage[chosenIndex];
  const chosenArmchairImageSrc = chosenArmchair ? chosenArmchair.src : "";

  return (
    <div>
      {chosenArmchair ? (
        <img src={chosenArmchairImageSrc} 
          alt={`Armchair ${chosenIndex + 1}`}
        />
      ) : (
        <p className="bg-black h-screen">Armchair not found.</p>
      )}
      <h1>{chosenArmchair.name}</h1>
      <h1>{chosenArmchair.price}</h1>

    </div>
  );
}

export default App;

