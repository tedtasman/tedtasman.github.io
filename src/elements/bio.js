import texts from '../content/texts.json';

export function Bio() {

    return (
      <div className='Bio'>
        <h1>{texts.bio.name}</h1>
        <p>{texts.bio.body}</p>   
      </div>
    )
  }