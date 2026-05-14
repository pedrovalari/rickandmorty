import { motion } from 'framer-motion';
import { cardVariants } from '../../constants/animations';
import { getStatusVariant } from '../../utils/character';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const statusVariant = getStatusVariant(character.status);

  return (
    <motion.article
      className="card"
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      layout
    >
      <div className="card__media">
        <img src={character.image} alt={character.name} loading="lazy" />
      </div>
      <div className="card__body">
        <h3 className="card__name">{character.name}</h3>
        <div className="card__meta">
          <span className={`card__status card__status--${statusVariant}`} />
          <span>{character.status} · {character.species}</span>
        </div>
        <dl className="card__details">
          <div>
            <dt>Origin</dt>
            <dd>{character.origin.name}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{character.location.name}</dd>
          </div>
        </dl>
      </div>
    </motion.article>
  );
};

export default CharacterCard;
