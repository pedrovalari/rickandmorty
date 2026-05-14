import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BackButton, Loader, EmptyState } from '../../components';
import { useCharacter } from '../../hooks/useCharacter';
import { useEpisodes } from '../../hooks/useEpisodes';
import { getStatusVariant } from '../../utils/character';
import { staggerContainer, cardVariants } from '../../constants/animations';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const { character, isLoading, isError, error, refetch } = useCharacter(id);
  const { episodes, isLoading: episodesLoading } = useEpisodes(character?.episode);

  return (
    <motion.div
      className="detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="detail__nav">
        <BackButton to="/">Back to characters</BackButton>
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}

        {isError && (
          <EmptyState
            key="error"
            title="Character not found"
            message={error}
            action={
              <button type="button" className="detail__retry" onClick={refetch}>
                Try again
              </button>
            }
          />
        )}

        {!isLoading && !isError && character && (
          <motion.article
            key="content"
            className="detail__content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="detail__media"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={character.image} alt={character.name} />
            </motion.div>

            <div className="detail__info">
              <motion.h1
                className="detail__name"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {character.name}
              </motion.h1>

              <motion.div
                className="detail__status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <span
                  className={`detail__status-dot detail__status-dot--${getStatusVariant(
                    character.status
                  )}`}
                />
                <span>{character.status} · {character.species}</span>
              </motion.div>

              <motion.dl
                className="detail__list"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {character.type && (
                  <motion.div variants={cardVariants}>
                    <dt>Type</dt>
                    <dd>{character.type}</dd>
                  </motion.div>
                )}
                <motion.div variants={cardVariants}>
                  <dt>Gender</dt>
                  <dd>{character.gender}</dd>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <dt>Origin</dt>
                  <dd>{character.origin.name}</dd>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <dt>Location</dt>
                  <dd>{character.location.name}</dd>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <dt>Episodes</dt>
                  <dd>{character.episode.length}</dd>
                </motion.div>
              </motion.dl>

              <section className="detail__episodes">
                <h2 className="detail__section-title">Episodes</h2>
                {episodesLoading ? (
                  <p className="detail__episodes-loading">Loading episodes…</p>
                ) : (
                  <motion.ul
                    className="detail__episode-list"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {episodes.map((episode) => (
                      <motion.li
                        key={episode.id}
                        className="detail__episode"
                        variants={cardVariants}
                      >
                        <span className="detail__episode-code">{episode.episode}</span>
                        <span className="detail__episode-name">{episode.name}</span>
                        <span className="detail__episode-date">{episode.air_date}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </section>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CharacterDetail;
