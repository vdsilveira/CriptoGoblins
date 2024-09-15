/* eslint-disable react/no-unescaped-entities */
export default function TextBody() {
  return (
    <>
      <div className="absolute bg-gray-600 rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xl h-auto p-6 ring-8 ring-white text-white text-center shadow-2xl shadow-white z-30 flex flex-col items-center space-y-6">
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold mb-4">About CryptoGoblins</h2>
        </div>
        <p>
          <span className="font-bold">CryptoGoblins</span> are part of a portfolio projected by <span className="font-bold">Dev @vdsilveira</span>, showcasing the development of an NFT platform on the Optimism testnet. On this platform, you can <span className="font-bold">mint goblin NFTs</span> and <span className="font-bold">level up their attributes</span>.
        </p>
        <p className="mt-4">
          The attributes you can upgrade for your goblins are:
          <br />
          - <span className="font-bold">Strength:</span> Increase your goblin's combat strength.
          <br />
          - <span className="font-bold">Agility:</span> Enhance your goblin's speed and agility.
          <br />
          - <span className="font-bold">Magic:</span> Boost your goblin's magical abilities.
          <br />
          - <span className="font-bold">Intelligence:</span> Improve your goblin's intellect and strategies.
        </p>
        <p className="mt-4">
          <span className="font-bold">Next Steps:</span>
          <br />
          We are planning to expand the project by adding a <span className="font-bold">fight ring game</span>, where users can pit their goblins against each other in exciting battles. Get ready to test your skills and strategies in the combat arena!
        </p>
      </div>
    </>
  );
}
