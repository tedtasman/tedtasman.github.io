import texts from '../content/texts.json';

export function Bio() {

    return (
      <div className='Bio'>
        <h1 className='Name'>{texts.bio.name}</h1>
        <p className='Bio-content'> {texts.bio.body}</p>   
      </div>
    )
  }