
import { useState } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "PP! PP! PP!",
      "PP! PP! PP!",
      "Are you sure PP ?",
      "What if I asked really nicely PP ?",
      "Pretty please PP ",
      "With a chocolate rice cake on top PP ",
      "What about a matcha frostie Pp ",
      "PLEASE POOKIE PP ",
      "But PP :*(",
      "I am going to die PP ",
      "Yep im dead PP ",
      "ok ur talking to my ghost PP ",
      "please babe PP ",
      ":(((( PP ",
      "PRETTY PLEASE PP ",
      "Estoy muerto PP ",
      "No :( PP ",
    ];

    const index = Math.min(noCount, phrases.length - 1);
    return phrases[index];
  };

  return (
    <>
      <style>{`
        body {
          background-color: pink;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          overflow: hidden;
        }
      `}</style>
      <div className="flex flex-col items-center">
        {yesPressed ? (
          <>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
            <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Bear with Roses"
            />
            <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
            <div className="flex items-center">
              <button
                className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
