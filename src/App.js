import './App.css';

export default function Homepage() {
  return (
    <>
      <div className='Landing-container'>
        <div className='element column'>
          <Bio />
        </div>
        <div className='element column'>
          <Shelf />
        </div>
      </div>
    </>
  );
}

function Bio() {
  return (
    <div className='Bio'>
      <h1>
        Ted Tasman
      </h1>
      <p>
          As a Computer Science student at Penn State, I'm deeply passionate about harnessing technology to tackle real-world challenges and create positive impacts. My journey in computer science has equipped me with a robust foundation in data structures, algorithms, and object-oriented programming. I am proficient in languages such as Python, Java, and C, which have enabled me to craft practical solutions. Beyond the academic realm, I've gained invaluable teamwork experience during my tenure in the food service industry, underscoring my commitment to being an exceptional collaborator. I'm driven by the belief that technology can drive transformative change, and I'm eager to explore opportunities where I can apply my skills and passion to make a meaningful difference.
      </p>
    </div>
  )
}

function Drawer({ value }) {
  return (
    <p>
      <div className='Drawer'>
        {value}
      </div>
    </p>
  );
}

function Shelf() {
  return (
    <div className='Shelf'>
      <Drawer value="Under Construction" />
      <Drawer value="Under Construction" />
    </div>
  );
}