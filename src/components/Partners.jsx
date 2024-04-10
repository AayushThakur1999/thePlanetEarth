import { partners } from '../data';

const Partners = () => {
  return (
    <section id="sec-2">
      <div className="h-secondary">Our Partners</div>
      <div className="container-2">
        {partners.map(partner => {
          const { id, src, alt, figCaption } = partner;
          return (
            <figure key={id}>
              <img className='partners' src={src} alt={alt} />
              <figcaption>{figCaption}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  )
};

export default Partners;