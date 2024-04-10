import { arts } from '../data';

const Art = () => {
  return (
    <section id="sec-1">
      <div className="sec-1-h">Our Art</div>
      <div id="container-1">
        {arts.map(art => {
          const { id, alt, src, figCaption } = art;
          return (
            <figure key={id}>
              <img src={src} alt={alt} className='items-1' />
              <figcaption>{figCaption}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  )
};

export default Art;